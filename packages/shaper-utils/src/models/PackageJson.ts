export interface ShaperConfig {
  name?: string;
}

export interface PackageJson {
  // Generic package.json configuration
  name: string;
  version: string;
  scripts?: Record<string, string>;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  main?: string;
  workspaces?:
    | string[]
    | {
        packages: string[];
      };

  // Shaper configuration
  shaper?: ShaperConfig;
}
