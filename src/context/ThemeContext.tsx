import { createContext, ReactNode, useState } from 'react';

export type ThemeType = 1 | 2 | 3;

export type ThemeContextType = {
  theme: ThemeType;
  setTheme: (val: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null)

type Props = {
  children: ReactNode;
};

const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeType>(1)

  return <ThemeContext.Provider value={{theme, setTheme}}>
    { children }
  </ThemeContext.Provider>
};

export default ThemeContextProvider;