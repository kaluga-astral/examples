module.exports = {
  'packages/ui/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@example/ui',
    'npm run lint:styles --workspace=@example/ui',
    () => 'npm run lint:types --workspace=@example/ui',
  ],
  'app/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@example/app',
    'npm run lint:styles --workspace=@example/app',
    () => 'npm run lint:types --workspace=@example/app',
  ],
};
