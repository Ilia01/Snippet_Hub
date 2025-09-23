import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

export const customTheme = createTheme({
  theme: 'dark',
  settings: {
    background: 'transparent',
    backgroundImage: 'none',
    foreground: '#CBD5E1',
    caret: '#CBD5E1',
    // Update selection colors
    selection: '#334155',
    selectionBackground: '#1E293B',
    selectionMatch: '#334155',
    gutterBackground: 'transparent',
    gutterForeground: '#64748B',
    lineHighlight: '#1E293B',
  },
  styles: [
    // Comments
    { tag: t.comment, color: '#64748B' },

    // Variables and text
    { tag: t.variableName, color: '#CBD5E1' },
    { tag: t.name, color: '#CBD5E1' },
    { tag: t.propertyName, color: '#CBD5E1' },

    // Strings and special characters
    { tag: [t.string, t.special(t.brace)], color: '#38BDF8' },
    { tag: t.regexp, color: '#38BDF8' },

    // Numbers and boolean values
    { tag: [t.number, t.bool, t.null], color: '#38BDF8' },

    // Keywords and operators
    { tag: [t.keyword, t.operator], color: '#0EA5E9' },
    { tag: t.definitionKeyword, color: '#0EA5E9' },

    // Functions
    { tag: [t.function(t.variableName), t.function(t.propertyName)], color: '#38BDF8' },
    { tag: t.tagName, color: '#38BDF8' },

    // Punctuation
    { tag: [t.punctuation, t.bracket], color: '#64748B' },

    // Types
    { tag: t.typeName, color: '#0EA5E9' },
    { tag: t.typeOperator, color: '#0EA5E9' },

    // Constants and attributes
    { tag: t.constant(t.name), color: '#38BDF8' },
    { tag: t.attributeName, color: '#38BDF8' },
  ],
});
