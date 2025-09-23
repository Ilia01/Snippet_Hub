import { Card } from '../Card';
import { Button } from '../Button';
import { Text } from '../Typography';
import { Highlight } from 'prism-react-renderer';
import { useNavigate } from 'react-router-dom';

export function SnippetCard({ snippet }) {
  const { title, description, code, language, tags, id } = snippet;
  const navigate = useNavigate();

  const handleViewFull = () => {
    navigate(`/editor/${id}`);
  };

  return (
    <Card className="group flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-200 p-4">
        <div>
          <Text className="font-medium text-neutral-900">{title}</Text>
          <Text variant="muted" className="text-sm">
            {language}
          </Text>
        </div>
        <Button
          variant="primary"
          size="sm"
          onClick={handleViewFull}
          className="opacity-0 group-hover:opacity-100"
        >
          View Full
        </Button>
      </div>

      {/* Code Preview */}
      <div className="flex-1 overflow-x-auto bg-neutral-100 p-4 font-mono">
        <div className="min-w-max"> {/* This ensures code doesn't wrap */}
          <Highlight code={code} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={`${className}`}
                style={{ ...style, background: 'transparent' }}
              >
                {tokens.map((line, i) => (
                  <div
                    key={i}
                    {...getLineProps({ line })}
                    className="whitespace-pre font-mono"
                  >
                    <Text variant="muted" className="inline-block w-6 select-none text-right pr-4 opacity-50">
                      {i + 1}
                    </Text>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-200 p-4">
        <Text variant="secondary" className="line-clamp-2 mb-3">
          {description}
        </Text>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Text
                key={tag}
                variant="muted"
                className="rounded bg-neutral-200 px-2 py-1 text-xs"
              >
                {tag}
              </Text>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
