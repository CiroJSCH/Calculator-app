// Libraries
import { useState, useContext } from 'react';

// Components
import ThemeSwitcher from './components/ThemeSwitcher';
import Display from './components/Display';
import Keypad from './components/Keypad';

// Context
import { ThemeContext, ThemeContextType } from './context/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  const themes: { [value: number]: string } = {
    1: 'theme-first',
    2: 'theme-second',
    3: 'theme-third',
  };

  return (
    <main
      className={`${themes[theme]} h-screen bg-main px-8 py-9 flex justify-center items-center`}
    >
      <div className='w-full max-w-[500px]'>
        <ThemeSwitcher />
        <Display />
        <Keypad />
      </div>
    </main>
  );
};

export default App;
