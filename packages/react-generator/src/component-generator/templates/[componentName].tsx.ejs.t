import * as React from 'react';

interface <%= componentName %>Props {
  children?: React.ReactNode;
}

export function <%= componentName %>({ children }: <%= componentName %>Props) {
  return <div>{children}</div>;
}
