import * as React from 'react';

interface TextFieldProps {
  children?: React.ReactNode;
}

export function TextField({ children }: TextFieldProps) {
  return <div>{children}</div>;
}
