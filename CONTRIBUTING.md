# Contributing to EcNavigationSuite

Thank you for your interest in contributing to [ec-navigation-suite] 🚀 We welcome contributions from the community 😁

## Getting Started

Before you start contributing, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

After cloning the repository, run:

\`\`\`bash
npm install
\`\`\`

This will install the necessary dependencies.

## Development

To start the development server:

1. Go to projects/ec-navigation-suite-styles and run:

\`\`\`bash
npm run build:watch
\`\`\`

Now, any changes to the default theme you make will be automatically compiled.

2. Go to root and open angular.json:
   \`\`\`json
   "styles": [
   "src/styles.scss",
   "dist/ec-navigation-suite/styles/ec-navigation-suite-styles.1.0.0.css",
   "node_modules/prismjs/themes/prism-tomorrow.css"
   ],
   \`\`\`

Replace the import from the remote npm package ec-navigation-suite-styles with "dist/ec-navigation-suite/styles/ec-navigation-suite-styles.1.0.0.css".

3. Go to root and open app.module.ts:

Here, change all imports from 'ec-navigation-suite' to projects/ec-navigation-suite/src/public-api. This way, any changes you make in projects/ec-navigation-suite will be automatically compiled.

## Submitting Changes

1. Fork the repository and create a new branch for your feature or bug fix.
2. Commit your changes and push them to your fork.
3. Open a pull request with a clear title and description.

## Coding Guidelines

- Follow the [Angular Style Guide](https://angular.io/guide/styleguide) for TypeScript and Angular best practices.
- Keep your code clean and well-documented.
- Write meaningful commit messages following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## Issues

If you find a bug or have a feature request, please open an issue. Provide as much detail as possible, including code examples if relevant.

## Code of Conduct

Please review our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing. By participating, you agree to abide by its terms.

Thank you for contributing to [ec-navigation-suite]!
