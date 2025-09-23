import { Card } from '../ui/Card';

export function EditorPane({ children }) {
  return (
    <div className="flex-1 overflow-hidden border-r border-neutral-200 bg-neutral-50">
      <div className="h-full p-4">
        <Card className="flex h-full flex-col p-0">
          {children}
        </Card>
      </div>
    </div>
  );
}
