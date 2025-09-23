export interface SnippetCardProps {
  imageSrc: string;
  title: string;
  description: string;
  language?: string;
  onOpen?: () => void;
}
