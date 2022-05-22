export interface ShaperPackageJsonConfiguration {
name?: string;
}

export interface PkgJson {
// Generic Package.Json Configuration
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

// Shaper Configuration
shaper?: ShaperPackageJsonConfiguration;
}
