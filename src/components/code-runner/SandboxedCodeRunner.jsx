import { forwardRef, useRef, useCallback, useImperativeHandle } from 'react';
import { formatForOutput } from "../../lib/formatOutput.js"

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
