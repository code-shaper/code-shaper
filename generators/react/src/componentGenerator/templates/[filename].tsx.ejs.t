import type * as React from 'react';

export interface <%= itemNamePascalCase %>Props {
  children?: React.ReactNode;
}

export function <%= itemNamePascalCase %>({ children }: <%= itemNamePascalCase %>Props) {
  return <div>{children}</div>;
}
