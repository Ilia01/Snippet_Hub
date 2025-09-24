# Snippet Hub

A modern, interactive code snippet management application built with React and Vite. Snippet Hub allows you to browse, edit, and run JavaScript code snippets in a sandboxed environment with syntax highlighting and real-time execution.

🌐 **[Live Demo](https://snippet-hub-weld.vercel.app)** - Try it out now!

## 🚀 Features

- **Interactive Code Editor**: Full-featured code editor with syntax highlighting powered by CodeMirror
- **Live Code Execution**: Run JavaScript code snippets in a sandboxed iframe environment
- **Local Storage**: Save and persist your code modifications using IndexedDB
- **Responsive Design**: Modern, clean UI built with Tailwind CSS
- **Code Syntax Highlighting**: Beautiful syntax highlighting with Prism.js
- **Alert System**: Toast notifications for user feedback
- **Routing**: Single-page application with React Router

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.13
- **Code Editor**: CodeMirror with JavaScript/TypeScript support
- **Database**: IndexedDB (via idb library)
- **Routing**: React Router DOM 7.9.1
- **Syntax Highlighting**: Prism React Renderer
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── code-runner/          # Sandboxed code execution
│   ├── editor/               # Code editor components
│   ├── layout/               # Layout components (Header, Footer, etc.)
│   └── ui/                   # Reusable UI components
├── contexts/                 # React contexts (Alert system)
├── data/                     # Default snippet data
├── hooks/                    # Custom React hooks
├── lib/                      # Database utilities
├── pages/                    # Page components
└── main.jsx                  # Application entry point
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd snippet-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Usage

### Browsing Snippets

The home page displays a grid of code snippets with:
- Title and description
- Language indicator
- Syntax-highlighted code preview
- Tags for categorization
- "View Full" button to open in editor

### Code Editor

Click "View Full" on any snippet to open the interactive editor featuring:

- **CodeMirror Editor**: Full-featured editor with:
  - Syntax highlighting
  - Line numbers
  - Code folding
  - Active line highlighting

- **Run Code**: Execute JavaScript code in a sandboxed environment
- **Save Code**: Persist your modifications locally
- **Output Pane**: View console output from code execution
- **Status Bar**: Shows execution status and language

### Code Execution

The application uses a sandboxed iframe to safely execute JavaScript code:
- Code runs in an isolated environment
- Console output is captured and displayed
- Errors are caught and shown in the output pane
- Complex data structures are properly formatted

## 🔧 Key Components

### SandboxedCodeRunner
Handles safe execution of JavaScript code in an iframe sandbox with:
- Console output capture
- Error handling
- Complex data structure formatting

### Database Layer
Uses IndexedDB for local storage:
- Save snippet modifications
- Load saved code on editor open
- Merge saved code with default snippets

### Alert System
Context-based notification system:
- Success/error messages
- Auto-dismiss after 5 seconds
- Toast-style notifications

## 📝 Default Snippets

The application comes with 12 JavaScript snippets covering:

- **Async/Await**: Promise.allSettled, timing patterns
- **Scope & Hoisting**: var vs let/const, closure examples
- **Equality**: == vs === comparisons
- **this Context**: Function binding and context
- **ES6 Features**: Destructuring, dynamic properties
- **Utilities**: Debounce and throttle functions

## 🎨 Styling

Built with Tailwind CSS featuring:
- Responsive design
- Modern color palette
- Component-based styling
- Typography system
- Card-based layouts

## 🔒 Security

- Code execution is sandboxed in iframes
- No server-side code execution
- Local storage only (no external data transmission)
- Safe JavaScript execution environment

## 🚀 Deployment

This application is deployed on Vercel and automatically updates when changes are pushed to the main branch.

### Manual Deployment

Build the application for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Vercel Deployment

The app is configured for automatic deployment on Vercel:
- **Live URL**: https://snippet-hub-weld.vercel.app
- **Auto-deployment**: Enabled for main branch pushes
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔮 Future Enhancements

- Support for additional programming languages
- Code sharing and collaboration features
- Snippet search and filtering
- Import/export functionality
- User authentication and cloud sync
- Code snippet templates and categories
