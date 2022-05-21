import * as React from 'react';

// ---------- <%= stateName %> ----------
// Modify the <%= stateName %> definition as per you requirements or
// import it directly from another module
interface <%= stateName %> {
  isEditing: boolean;
}

// ---------- <%= contextName %> ----------
// contains <%= stateName %> and <%= stateSetter %>

type <%= stateSetter %> = (<%= stateNameCamelCase %>: <%= stateName %>) => void;

const <%= contextName %> = React.createContext<
  { <%= stateNameCamelCase %>: <%= stateName %>; set<%= stateName %>: <%= stateSetter %> } | undefined
>(undefined);

// ---------- <%= providerName %> ----------
interface <%= providerName %>Props {
  children?: React.ReactNode;
}

function <%= providerName %>({ children }: <%= providerName %>Props) {
  const [<%= stateNameCamelCase %>, set<%= stateName %>] = React.useState<<%= stateName %>>({
    isEditing: false,
  });

  const value = { <%= stateNameCamelCase %>, set<%= stateName %> };
  return (
    <<%= contextName %>.Provider value={value}>
      {children}
    </<%= contextName %>.Provider>
  );
}

// ---------- <%= hookName %> ----------
function <%= hookName %>() {
  const <%= contextNameCamelCase %> = React.useContext(<%= contextName %>);
  /* istanbul ignore next */
  if (<%= contextNameCamelCase %> === undefined) {
    throw new Error(
      '<%= hookName %> must be used within a <%= providerName %>'
    );
  }
  return <%= contextNameCamelCase %>;
}

export { <%= providerName %>, <%= hookName %> };
