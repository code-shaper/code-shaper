import * as React from 'react';

export interface TextFieldProps {
  children?: React.ReactNode;
}

export function TextField({ children }: TextFieldProps) {
  return <div>{children}</div>;
}
