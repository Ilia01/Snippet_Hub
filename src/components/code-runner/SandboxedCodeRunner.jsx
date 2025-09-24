import { forwardRef, useRef, useCallback, useImperativeHandle } from 'react';

// Function to format complex data structures into a single string
const formatForOutput = (item, indent = 0) => {
  const indentation = '  '.repeat(indent);
  const nextIndentation = '  '.repeat(indent + 1);

  if (item === null) {
    return 'null';
  }

  if (Array.isArray(item)) {
    if (item.length === 0) return '[]';
    const contents = item
      .map(i => formatForOutput(i, indent + 1))
      .join(',\n' + nextIndentation);
    return `[\n${nextIndentation}${contents}\n${indentation}]`;
  }

  if (typeof item === 'object') {
    const keys = Object.keys(item);
    if (keys.length === 0) return '{}';

    const contents = keys
      .map(key => `${key}: ${formatForOutput(item[key], indent + 1)}`)
      .join(',\n' + nextIndentation);
    return `{\n${nextIndentation}${contents}\n${indentation}}`;
  }

  if (typeof item === 'string') return `${item}`;
  if (typeof item === 'function') return `[Function: ${item.name || '(anonymous)'}]`;

  return String(item);
};



export const SandboxedCodeRunner = forwardRef(function SandboxedCodeRunner({
  code,
  onOutput,
  onStatusChange
}, ref) {
  const iframeRef = useRef(null);

  const handleRunCode = useCallback(() => {
    onOutput([]);
    onStatusChange('Running...');

    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.src = 'about:blank';
    iframe.sandbox = 'allow-scripts allow-same-origin';

    iframe.onload = async () => {
      const sandboxWindow = iframe.contentWindow;
      if (!sandboxWindow) return;

      const consoleOutput = [];
      sandboxWindow.console.log = (...args) => {
        const formattedLine = args
          .map(arg => formatForOutput(arg))
          .join(' ');

        consoleOutput.push(formattedLine);
        onOutput([...consoleOutput]);

        console.log(...args);
      };

      try {
        await sandboxWindow.eval(code);
        if (consoleOutput.length === 0) {
          onOutput(['No output']);
        }
        onStatusChange('Ready');
      } catch (error) {
        onOutput(['Error: ' + error.toString()]);
        onStatusChange('Error');
      }
    };
  }, [code, onOutput, onStatusChange]);

  useImperativeHandle(ref, () => ({
    handleRunCode
  }));

  return (
    <div className="h-full">
      <iframe
        ref={iframeRef}
        style={{ display: 'none' }}
        title="sandbox"
      />
    </div>
  );
});
