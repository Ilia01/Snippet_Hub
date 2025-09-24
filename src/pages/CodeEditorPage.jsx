import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SandboxedCodeRunner } from '../components/code-runner/SandboxedCodeRunner';
import { EditorHeader } from '../components/editor/EditorHeader';
import { EditorPane } from '../components/editor/EditorPane';
import { OutputPane } from '../components/editor/OutputPane';
import { StatusBar } from '../components/editor/StatusBar';
import { snippets } from '../data/snippets';
import { useNotification } from '../hooks/useNotification';
import CodeMirror from '@uiw/react-codemirror';
import { javascript, typescriptLanguage } from '@codemirror/lang-javascript';
import { customTheme } from '../components/editor/EditorTheme';
import { getSavedSnippetCode, saveSnippet } from '../lib/database';
import { getFileExtension } from '../lib/getFileExtension';

export function CodeEditorPage() {
  const { snippetId } = useParams();
  const [code, setCode] = useState('');
  const [output, setOutput] = useState([]);
  const [status, setStatus] = useState('Ready');
  const notify = useNotification();
  const runnerRef = useRef(null);
  const navigate = useNavigate();

  let snippet = snippets.find(s => s.id === snippetId);

  useEffect(() => {
    if (!snippet) {
      navigate('/not-found');
      return;
    }

    const loadCode = async () => {
      const savedCode = await getSavedSnippetCode(snippet.id);

      if (savedCode) {
        setCode(savedCode);
      } else {
        setCode(snippet.code);
      }
    }
    loadCode();
  }, [snippet, navigate]);

  if (!snippet) {
    return null; // Or a loading spinner
  }

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleRunCode = () => {
    runnerRef.current?.handleRunCode();
  };

  const handleSaveCode = async () => {
    await saveSnippet(snippet.id, code);
    notify.success('Code saved Successfully!');
  };



  return (
    <div className="flex h-screen flex-col">
      <EditorHeader
        fileName={`${snippet.title.replaceAll(' ', '_')}.${getFileExtension(snippet.language)}`}
        language={snippet.language}
        onRun={handleRunCode}
        onSave={handleSaveCode}
      />

      <div className="flex flex-1 overflow-hidden">
        <EditorPane>
          <div className="h-full w-full">
            <CodeMirror
              value={code}
              height="100%"
              width="100%"
              theme={customTheme}
              extensions={[javascript({ jsx: true }), typescriptLanguage]}
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
            code={code}
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
