import '@testing-library/jest-dom';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import type * as React from 'react';

/*
 * This file re-exports everything from React Testing Library and then overrides
 * its render method. In tests that require global context providers, import
 * this file instead of React Testing Library.
 *
 * For further details, see:
 * https://testing-library.com/docs/react-testing-library/setup/#custom-render
 */

interface AllProvidersProps {
  children?: React.ReactNode;
}

function AllProviders({ children }: AllProvidersProps) {
  return <>{children}</>;
}

/**
 * Custom render method that includes global context providers
 */
interface CustomRenderOptions {
  initialRoute?: string;
  renderOptions?: Omit<RenderOptions, 'wrapper'>;
}

function customRender(ui: React.ReactElement, options?: CustomRenderOptions) {
  const opts = options ?? {};
  const { initialRoute, renderOptions } = opts;

  if (initialRoute !== undefined) {
    window.history.pushState({}, 'Initial Route', initialRoute);
  }

  return render(ui, { wrapper: AllProviders, ...renderOptions });
}

export * from '@testing-library/react'; // eslint-disable-line import/export
export { customRender as render, userEvent }; // eslint-disable-line import/export
