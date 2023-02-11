// Libraries
import { useContext } from 'react';

// Interface
import { keys } from '../constants/index';

// Context
import { ThemeContext, ThemeContextType } from '../context/ThemeContext';
import {
  CalculatorContext,
  CalculatorContextType,
} from '../context/CalculatorContext';

type Props = {
  item: keys;
};

const Key = ({ item }: Props) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const { operation, setOperation, del, reset, calculate, setResult, addToOperation } =
    useContext(CalculatorContext) as CalculatorContextType;

  const keyStyles = `${item.color} ${item.shadow} ${
    item.space === 1 ? 'col-span-1' : 'col-span-2'
  } flex items-center justify-center rounded-lg font-bold ${item.textSize} ${
    item.textColor
  } py-2 min-h-[64px] ${
    theme === 3 && item.value === '=' && 'text-txtColorSec'
  } cursor-pointer hover:brightness-125 transition duration-200`;

  const handleOnClick = () => {
    if (item.value === 'DEL') del();
    else if (item.value === 'RESET') reset();
    else if (item.value === '=') calculate(operation);
    else addToOperation(item.value);
  };

  return (
    <div className={`${keyStyles}`} onClick={handleOnClick}>
      {item.value}
    </div>
  );
};

export default Key;
