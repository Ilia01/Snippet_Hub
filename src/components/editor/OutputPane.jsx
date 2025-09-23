import { Card } from '../ui/Card';
import { Text } from '../ui/Typography';

export function OutputPane({ output }) {
  return (
    <div className="w-80 overflow-auto bg-neutral-100">
      <div className="sticky top-0 border-b border-neutral-200 bg-neutral-100 p-4">
        <Text variant="default" className="font-medium">
          Output
        </Text>
      </div>
      <div className="p-4">
        <Card className="font-mono text-sm">
          {output || '> Console output will appear here...'}
        </Card>
      </div>
    </div>
  );
}

