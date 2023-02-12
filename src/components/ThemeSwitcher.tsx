// Libraries
import { useContext } from 'react';

// Context
import {
  ThemeContext,
  ThemeContextType,
  ThemeType,
} from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTheme(Number(e.target.value) as ThemeType);

  return (
    <div
      className={`flex items-center justify-between ${
        theme === (1 as ThemeType) ? 'text-txtWhite' : 'text-txtColor'
      }`}
    >
      <h1 className='font-bold text-3xl'>calc</h1>
      <div className='flex gap-8 items-center'>
        <p className='text-[13px] font-bold tracking-[1.2px] mt-6'>THEME</p>
        <div className='flex flex-col w-[75px] items-center '>
          <label className='flex -top-6 justify-between font-bold text-[13px] w-[80%]'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </label>
          <input
            type='range'
            className='w-full slider'
            min={1}
            max={3}
            step={1}
            value={theme}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
