import { useState, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SandboxedCodeRunner } from '../components/code-runner/SandboxedCodeRunner';
import { EditorHeader } from '../components/editor/EditorHeader';
import { EditorPane } from '../components/editor/EditorPane';
import { OutputPane } from '../components/editor/OutputPane';
import { StatusBar } from '../components/editor/StatusBar';
import { snippets } from '../data/snippets';
import { useNotification } from '../hooks/useNotification';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { customTheme } from '../components/editor/EditorTheme';

export function CodeEditorPage() {
  const { snippetId } = useParams();
  const [code, setCode] = useState('');
  const [output, setOutput] = useState([]);
  const [status, setStatus] = useState('Ready');
  const notify = useNotification();
  const runnerRef = useRef(null);

  // Find the snippet
  const snippet = snippets.find(s => s.id === snippetId);

  if (!snippet) {
    notify.error('Snippet not found');
    return <Navigate to="/" replace />;
  }

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleRunCode = () => {
    // Call the runner's handleRunCode method
    runnerRef.current?.handleRunCode();
  };

  const getFileExtension = (language) => {
    switch (language.toLowerCase()) {
      case 'javascript':
        return 'js';
      case 'typescript':
        return 'ts';
      case 'python':
        return 'py';
      case 'java':
        return 'java';
      case 'c++':
        return 'cpp';
      case 'c':
        return 'c';
      case 'html':
        return 'html';
      case 'css':
        return 'css';
      case 'json':
        return 'json';
      default:
        return 'txt';
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <EditorHeader
        fileName={`${snippet.title.replaceAll(' ', '_')}.${getFileExtension(snippet.language)}`}
        language={snippet.language}
        onRun={handleRunCode}
      />

      <div className="flex flex-1 overflow-hidden">
        <EditorPane>
          <div className="h-full w-full">
            <CodeMirror
              value={code || snippet.code}
              height="100%"
              width="100%"
              theme={customTheme}
              extensions={[javascript()]}
              onChange={handleCodeChange}
              className="h-full overflow-hidden"
              basicSetup={{
                lineNumbers: true,
                highlightActiveLineGutter: true,
                highlightActiveLine: true,
                foldGutter: true,
              }}
            />
          </div>
          <SandboxedCodeRunner
            ref={runnerRef}
            code={code || snippet.code}
            onOutput={setOutput}
            onStatusChange={setStatus}
          />
        </EditorPane>
        <OutputPane output={output.join('\n')} />
      </div>

      <StatusBar
        status={status}
        language={snippet.language}
      />
    </div>
  );
}
