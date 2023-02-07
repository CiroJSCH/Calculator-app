// Libraries
import { useState } from 'react';

// Components
import ThemeSwitcher from './components/ThemeSwitcher';
import Display from './components/Display';

type Props = {};

const App = (props: Props) => {
  const [theme, setTheme] = useState<number>(1);

  const themes: {[value: number] : string} = {
    1: 'theme-first',
    2: 'theme-second',
    3: 'theme-third',
  };

  return (
    <main className={`${themes[theme]} h-screen bg-main px-8 py-9`}>
      <ThemeSwitcher theme={theme} setTheme={setTheme}/>
      <Display />
    </main>
  );
};

export default App;
