import type { PackageJson as BasePackageJson } from 'type-fest';

export type ShaperConfig = {
  name?: string;
};

export type PackageJson = BasePackageJson & { shaper?: ShaperConfig };
