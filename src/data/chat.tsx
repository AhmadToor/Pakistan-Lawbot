export const message = [
    {
        text: "Hey, Pakistan Lawbot.",
        sender: "user",
        timestamp: "2023-10-01T12:00:00Z"
    },
    {
        text: `
# Hello Zar Wali Khan

- May I help you?
- May I assist you?



### Additional info

This is a [link](https://github.com/remarkjs/react-markdown)
`,
        sender: "ai",
        timestamp: "2023-10-01T12:00:00Z"
    },
    {
        text: "I have a question about my account.",
        sender: "user",
        timestamp: "2023-10-01T12:01:00Z"
    },
    {
        text: `# React + TypeScript + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level \`parserOptions\` property like this:

\`\`\`js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
\`\`\`

- Replace \`tseslint.configs.recommended\` to \`tseslint.configs\` or \`tseslint.configs\`
- Optionally add \`...tseslint.config\`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

\`\`\`js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
\`\`\`
`,
        sender: "ai",
        timestamp: "2023-10-01T12:02:00Z"
    },
    {
        text: 'Give me an example of inline and block code!',
        sender: 'user',
        timestamp: "2023-10-01T12:02:00Z"
    },
    {
        text: `  
  This is \`inline code\` and below is a block code\:
  \`\`\`js
  console.log('Hello')
  \`\`\`
  `,
        sender: "ai",
        timestamp: "2023-10-01T12:02:00Z"
    }
];

export const aiDefaultMesg = {
    text: "Can you provide me with more details?",
    sender: "ai",
    timestamp: "2023-10-01T12:00:00Z"
}