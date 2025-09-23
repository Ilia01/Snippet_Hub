import { forwardRef, useRef, useCallback, useImperativeHandle } from 'react';

export const SandboxedCodeRunner = forwardRef(function SandboxedCodeRunner({
  code,
  onOutput,
  onStatusChange
}, ref) {
  const iframeRef = useRef(null);

  const handleRunCode = useCallback(() => {
    onOutput([]); // Clear previous output
    onStatusChange('Running...'); // Update status

    const iframe = iframeRef.current;
    if (!iframe) return;

    // Create an empty, sandboxed iframe
    iframe.src = 'about:blank';
    iframe.sandbox = 'allow-scripts allow-same-origin';

    iframe.onload = () => {
      const sandboxWindow = iframe.contentWindow;

      // Intercept console.log and capture output
      const consoleOutput = [];
      sandboxWindow.console.log = (...args) => {
        consoleOutput.push(args.join(' '));
        onOutput(consoleOutput); // Update output in real-time
      };

      try {
        // Execute the code inside the sandboxed iframe
        sandboxWindow.eval(code);
        if (consoleOutput.length === 0) {
          onOutput(['No output']); // Handle case with no console.log calls
        }
        onStatusChange('Ready'); // Update status on completion
      } catch (error) {
        onOutput(['Error: ' + error.toString()]);
        onStatusChange('Error'); // Update status on error
      }
    };
  }, [code, onOutput, onStatusChange]);

  // Expose handleRunCode to parent
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
