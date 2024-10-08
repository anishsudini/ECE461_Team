import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['src/**/*.test.ts'],  // Explicitly include only test files in the src directory
        exclude: [
            'node_modules',
            'dist',
            'repos/**/*', // Use more explicit exclusion for repos directory
            'logs',
            'coverage',
        ],
        coverage: {
            enabled: true,
            provider: 'istanbul',
            reportsDirectory: './coverage',
            reporter: ['text', 'html', 'json-summary'],
            all: false,  // Disable to avoid including all files by default
            include: ['src/**/*.ts'], // Only include source files you want to cover
            exclude: ['node_modules', 'dist', 'src/__tests__', 'repos/**/*', 'logs', 'coverage'],
            thresholds: {
                statements: 80,
                branches: 75,
                functions: 80,
                lines: 80,
            },
        },
    },
});
