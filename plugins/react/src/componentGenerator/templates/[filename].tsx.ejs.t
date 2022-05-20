import * as React from 'react';

interface <%= itemNamePascalCase %>Props {
  children?: React.ReactNode;
}

export function <%= itemNamePascalCase %>({ children }: <%= itemNamePascalCase %>Props) {
  return <div>{children}</div>;
}
