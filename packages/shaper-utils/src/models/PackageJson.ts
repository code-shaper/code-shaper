import type { JsonObject, PackageJson as BasePackageJson } from 'type-fest';

export type ShaperConfig = {
  scripts: JsonObject;
};

export type PackageJson = BasePackageJson & { shaper?: ShaperConfig };
