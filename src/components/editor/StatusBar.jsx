import { Text } from '../ui/Typography';

export function StatusBar({ status, language }) {
  return (
    <div className="flex h-6 items-center justify-between border-t border-neutral-200 bg-neutral-100 px-4">
      <Text variant="muted" className="text-xs">
        {status}
      </Text>
      <Text variant="muted" className="text-xs">
        {language}
      </Text>
    </div>
  );
}
