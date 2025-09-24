import { Header } from './components/layout/Header';
import { Main } from './components/layout/Main';
import { Footer } from './components/layout/Footer';
import { Section } from './components/layout/Section';
import { Container } from './components/layout/Container';
import { SnippetsGrid } from './components/ui/SnippetsGrid/SnippetsGrid';
import { SnippetCard } from './components/ui/SnippetCard/SnippetCard';
import { Heading, Text } from './components/ui/Typography';
import { snippets as defaultSnippets } from './data/snippets';
import { useEffect, useState } from 'react';
import { getAllSavedSnippets } from './lib/database';

function App() {
  const [allSnippets, setAllSnippets] = useState(defaultSnippets);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSavedCode = async () => {
      try {
        const savedSnippets = await getAllSavedSnippets();

        // Create a map for quick lookup of saved code
        const savedCodeMap = savedSnippets.reduce((map, item) => {
          map[item.id] = item.code;
          return map;
        }, {});

        const mergedSnippets = defaultSnippets.map(snippet => ({
          ...snippet,
          code: savedCodeMap[snippet.id] || snippet.code
        }));

        setAllSnippets(mergedSnippets);
      } catch (error) {
        console.error("Failed to load saved snippets:", error);
        // Fallback to default snippets on error
        setAllSnippets(defaultSnippets);
      } finally {
        setLoading(false);
      }
    };

    loadSavedCode();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Text variant="default" className="text-lg text-neutral-500">
          Loading snippets...
        </Text>
      </div>
    )
  }

  return (
    <>
      <Header>
        <Container>
          <h1 className="text-2xl font-bold text-neutral-900">Your App</h1>
        </Container>
      </Header>

      <Main>
        <Section>
          <Container>
            <Heading level={2} className="mb-8">Code Snippets</Heading>
            <SnippetsGrid>
              {allSnippets.map(snippet => (
                <SnippetCard
                  key={snippet.id}
                  snippet={snippet}
                />
              ))}
            </SnippetsGrid>
          </Container>
        </Section>
      </Main>
      <Footer>
        <Container>
          <p className="text-neutral-500">&copy; 2025 Your Company</p>
        </Container>
      </Footer>
    </>
  );
}

export default App;
