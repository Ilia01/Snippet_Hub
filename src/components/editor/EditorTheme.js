import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

export const customTheme = createTheme({
  theme: 'dark',
  settings: {
    background: 'transparent',
    backgroundImage: 'none',
    foreground: '#CBD5E1',
    caret: '#CBD5E1',
    selection: '#334155',
    selectionMatch: '#334155',
    gutterBackground: 'transparent',
    gutterForeground: '#64748B',
    lineHighlight: '#1E293B',
  },
  styles: [
    { tag: t.comment, color: '#64748B' },
    { tag: t.variableName, color: '#CBD5E1' },
    { tag: [t.string, t.special(t.brace)], color: '#38BDF8' },
    { tag: [t.number, t.bool], color: '#38BDF8' },
    { tag: [t.keyword], color: '#0EA5E9' },
    { tag: [t.function(t.variableName)], color: '#38BDF8' },
    // Add more syntax highlighting rules as needed
  ],
});
