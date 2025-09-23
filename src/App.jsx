// import { Button } from './components/ui/Button'
// import { Card, CardTitle } from './components/ui/Card'
// import { Heading, Text, Link } from './components/ui/Typography'
import { Header } from './components/layout/Header'
import { Main } from './components/layout/Main'
import { Footer } from './components/layout/Footer'
import { Section } from './components/layout/Section'
import { Container } from './components/layout/Container'
import { SnippetsGrid } from './components/ui/SnippetsGrid/SnippetsGrid';
import { SnippetCard } from './components/ui/SnippetCard/SnippetCard';
import { Heading } from './components/ui/Typography'
import { snippets } from './data/snippets';

function App() {
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
              {snippets.map(snippet => (
                <SnippetCard
                  key={snippet.id}
                  snippet={snippet}
                  onOpen={(snippet) => console.log('Opening snippet:', snippet.id)}
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
  )
}

export default App
