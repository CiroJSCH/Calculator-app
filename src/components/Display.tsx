// Libraries
import { useContext } from 'react';

// Context
import { ThemeContext, ThemeContextType, ThemeType } from '../context/ThemeContext';
import { CalculatorContext, CalculatorContextType } from '../context/CalculatorContext';

const Display = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const { result, operation } = useContext(CalculatorContext) as CalculatorContextType;

  return (
    <div className='w-full h-auto bg-screen rounded-lg mt-8 px-6 py-4 flex items-center justify-end'>
      <span
        className={`text-[40px] text-txtColor font-bold overflow-x-scroll scrollbar-thin scrollbar-thumb-keySecSh ${
          theme === 1 as ThemeType  ? 'text-txtWhite' : 'text-txtColor'
        }`}
      >
        {
          operation !== "" ? operation : result
        }
      </span>
    </div>
  );
};

export default Display;
