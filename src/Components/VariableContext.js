import React from 'react';

export const variables = {
    colors: {
        primary: '#14213d',
        accent: '#fca311',
        gray: '#e5e5e5',
        dark: '#000000'
    }   
}

export const VariableContextValue = React.createContext(variables)

function VariableContext({ children }) {
  return <VariableContextValue.Provider value={variables}>
      {children}
  </VariableContextValue.Provider>;
}

export default VariableContext;
