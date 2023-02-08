// Libraries
import { useState } from 'react';

// Components
import ThemeSwitcher from './components/ThemeSwitcher';
import Display from './components/Display';
import Keypad from './components/Keypad';

type Props = {};

const App = (props: Props) => {
  const [theme, setTheme] = useState<number>(1);

  const themes: { [value: number]: string } = {
    1: 'theme-first',
    2: 'theme-second',
    3: 'theme-third',
  };

  return (
    <main className={`${themes[theme]} h-screen bg-main px-8 py-9 flex justify-center items-center`}>
      <div className='w-full max-w-[500px]'>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <Display theme={theme} />
        <Keypad theme={theme}/>
      </div>
    </main>
  );
};

export default App;
