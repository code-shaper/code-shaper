'use client';

import * as React from 'react';
import { User } from '@/models';

// ---------- AuthState ----------
// Modify the AuthState definition as per you requirements or
// import it directly from another module
interface AuthState {
  user?: User;
}

// ---------- AuthStateContext ----------
// contains AuthState and AuthStateSetter

type AuthStateSetter = (authState: AuthState) => void;

const AuthStateContext = React.createContext<
  { authState: AuthState; setAuthState: AuthStateSetter } | undefined
>(undefined);

// ---------- AuthStateContextProvider ----------
interface AuthStateContextProviderProps {
  children?: React.ReactNode;
}

function AuthStateContextProvider({ children }: AuthStateContextProviderProps) {
  const [authState, setAuthState] = React.useState<AuthState>({});

  const value = { authState, setAuthState };
  return (
    <AuthStateContext.Provider value={value}>
      {children}
    </AuthStateContext.Provider>
  );
}

// ---------- useAuthStateContext ----------
function useAuthStateContext() {
  const authStateContext = React.useContext(AuthStateContext);
  /* istanbul ignore next */
  if (authStateContext === undefined) {
    throw new Error(
      'useAuthStateContext must be used within a AuthStateContextProvider'
    );
  }
  return authStateContext;
}

export { AuthStateContextProvider, useAuthStateContext };
