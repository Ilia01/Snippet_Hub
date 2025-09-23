export const snippets = [
  {
    id: '1',
    title: 'React Data Fetching Hook',
    description: 'A custom hook for handling data fetching with loading and error states',
    language: 'javascript',
    code: `const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};`,
    tags: ['react', 'hooks', 'fetch'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '2',
    title: 'Tailwind CSS Grid Layout',
    description: 'Responsive grid layout with Tailwind CSS classes',
    language: 'html',
    code: `<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <div class="rounded-lg bg-white p-6 shadow">
    <h2 class="text-xl font-bold">Card 1</h2>
    <p class="mt-2 text-gray-600">Card content here</p>
  </div>
  <!-- Repeat for other cards -->
</div>`,
    tags: ['tailwind', 'css', 'responsive'],
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02')
  },
  {
    id: '3',
    title: 'Python List Comprehension',
    description: 'Examples of Python list comprehension for cleaner code',
    language: 'python',
    code: `# Traditional way
squares = []
for x in range(10):
    squares.append(x ** 2)

# List comprehension
squares = [x ** 2 for x in range(10)]

# With condition
even_squares = [x ** 2 for x in range(10) if x % 2 == 0]`,
    tags: ['python', 'lists', 'comprehension'],
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03')
  },
  {
    id: '4',
    title: 'TypeScript Interface',
    description: 'TypeScript interface for defining object shapes',
    language: 'typescript',
    code: `interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
  settings: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
  roles: string[];
}

const user: User = {
  id: '123',
  name: 'John Doe',
  email: 'john@example.com',
  settings: {
    theme: 'dark',
    notifications: true
  },
  roles: ['user', 'admin']
};`,
    tags: ['typescript', 'interface', 'types'],
    createdAt: new Date('2024-01-04'),
    updatedAt: new Date('2024-01-04')
  },
  {
    id: '5',
    title: 'CSS Grid Template',
    description: 'Modern CSS Grid layout with named areas',
    language: 'css',
    code: `.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }`,
    tags: ['css', 'grid', 'layout'],
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  }
];
