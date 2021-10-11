export default {
  clearMocks: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: true,
      },
    ],
    "^.+\\.ts$": "ts-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".svelte"],
  moduleFileExtensions: ["js", "ts", "svelte"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  transformIgnorePatterns: ["node_modules/(?!(@roxi/routify)/)"],
};
