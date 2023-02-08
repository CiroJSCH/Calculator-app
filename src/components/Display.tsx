// Libraries
import { useContext } from 'react';

// Context
import { ThemeContext, ThemeContextType, ThemeType } from '../context/ThemeContext';

const Display = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div className='w-full h-auto bg-screen rounded-lg mt-8 px-6 py-4 flex items-center justify-end'>
      <span
        className={`text-[40px] text-txtColor font-bold ${
          theme === 1 as ThemeType  ? 'text-txtWhite' : 'text-txtColor'
        }`}
      >
        399,981
      </span>
    </div>
  );
};

export default Display;
