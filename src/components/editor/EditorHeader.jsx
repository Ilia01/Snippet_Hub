import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Text } from '../ui/Typography';

export function EditorHeader({ fileName, language, onRun, onSave }) {
  const navigate = useNavigate();


  return (
    <div className="flex h-14 items-center justify-between border-b border-neutral-200 bg-neutral-100 px-4">
      <div className="flex items-center gap-2">
        <Text variant="secondary" className="text-sm font-medium">
          {fileName}
        </Text>
        <Text variant='default' className="rounded bg-neutral-200 px-2 py-1 text-xs">
          {language}
        </Text>
        <Button variant="primary" size="sm" onClick={() => navigate('/')}>
          Home
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant='primary' size='sm' onClick={onSave}>
          Save
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={onRun}
        >
          Run Code
        </Button>
      </div>
    </div>
  );
}

