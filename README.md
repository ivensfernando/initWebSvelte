# Biidin Presentation Front-End

This Svelte + Vite project renders a presentation-style front-end with image-first tasks, sectioned content, and controls to add or remove sections. All references to BidiinPost are handled by Biidin in the copy.

## Quick start

```bash
npm install
npm run dev
```

## Useful commands

```bash
npm run dev
npm run build
npm run preview
npm test
```

## Makefile shortcuts

You can also use the Makefile targets if you prefer:

```bash
make install
make dev
make build
make preview
```

## Testing expectations

To keep the front-end stable, always follow this workflow:

1. Run the existing test suite before you start work.
2. Add or update tests whenever you ship new functionality.
3. Run the full test suite again before you open a PR.

The main test command is:

```bash
npm test
```
