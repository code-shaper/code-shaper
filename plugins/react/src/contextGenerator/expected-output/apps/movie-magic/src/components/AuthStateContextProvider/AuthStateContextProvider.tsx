import * as React from 'react';

// ---------- AuthState ----------
// Modify the AuthState definition as per you requirements or
// import it directly from another module
interface AuthState {
  isEditing: boolean;
}

// ---------- AuthStateContext ----------
// contains AuthState and AuthStateSetter

type AuthStateSetter = (authState: AuthState) => void;

const AuthStateContext = React.createContext<
  { authState: AuthState; setAuthState: AuthStateSetter } | undefined
>(undefined);

// ---------- AuthStateContextProvider ----------
interface AuthStateContextProviderProps {
  initialState?: AuthState;
  children?: React.ReactNode;
}

function AuthStateContextProvider({
  initialState = { isEditing: false },
  children,
}: AuthStateContextProviderProps) {
  const [authState, setAuthState] = React.useState<AuthState>(initialState);

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
