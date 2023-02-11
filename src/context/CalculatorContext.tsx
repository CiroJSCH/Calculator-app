import { createContext, ReactNode, useState } from 'react';

export type CalculatorContextType = {
  result: string;
  setResult: (val: string) => void;
  operation: string;
  setOperation: (val: string) => void;
  addToOperation: (val: string) => void;
  del: () => void;
  reset: () => void;
  calculate: (val: string) => void;
};

const evaluate = (x: string, y: string, operator: string): string => {
  const add = (x: string, y: string): number => parseFloat(x) + parseFloat(y);
  const substract = (x: string, y: string): number =>
    parseFloat(x) - parseFloat(y);
  const divide = (x: string, y: string): number =>
    parseFloat(x) / parseFloat(y);
  const multiply = (x: string, y: string): number =>
    parseFloat(x) * parseFloat(y);

  let result = 0;

  switch (operator) {
    case '+':
      result = add(x, y);
      break;

    case '-':
      result = substract(x, y);
      break;

    case '/':
      result = divide(x, y);
      break;

    case 'x':
      result = multiply(x, y);
      break;
  }

  return `${result}`;
};

const isSymbol = (value: string): boolean => {
  return (
    value === '+' ||
    value === '-' ||
    value === 'x' ||
    value === '/' ||
    value === '.'
  );
};

export const CalculatorContext = createContext<CalculatorContextType | null>(
  null
);

type Props = {
  children: ReactNode;
};

const CalculatorContextProvider = ({ children }: Props) => {
  const [result, setResult] = useState<string>('0');
  const [operation, setOperation] = useState<string>('');

  const addToOperation = (value: string) => {
    const symbol = isSymbol(value);
    const lastChar = isSymbol(operation[operation.length - 1]);

    if (!(symbol && lastChar)) setOperation(operation + value);
  };

  const del = () => {
    if (result === 'Math error') {
      setResult('0');
      setOperation('');
    } else {
      setOperation(
        operation.length > 1 ? operation.substring(0, operation.length - 1) : ''
      );
      setResult(
        result.length > 1 ? result.substring(0, result.length - 1) : '0'
      );
    }
  };
  const reset = () => {
    setOperation('');
    setResult('0');
  };

  const calculate = (operation: string) => {
    const numbers: Array<string> = operation
      .split(/[\+\-x/]/g)
      .map((number) => {
        if (number === '') return '0';
        else return number;
      });
    const operators: Array<string> = operation
      .replace(/[0-9\.]+/g, '')
      .split('');

    for (let operator in operators) {
      if (operators[operator] === 'x' || operators[operator] === '/') {
        const operationResult = evaluate(
          numbers[operator],
          numbers[parseInt(operator) + 1],
          operators[operator]
        );
        numbers.splice(parseInt(operator), 2, operationResult);
        operators.splice(parseInt(operator), 1);
      }
    }

    for (let operator in operators) {
      if (operators[operator] === '+' || operators[operator] === '-') {
        const operationResult = evaluate(
          numbers[operator],
          numbers[parseInt(operator) + 1],
          operators[operator]
        );
        numbers.splice(parseInt(operator), 2, operationResult);
        operators.splice(parseInt(operator), 1);
      }
    }

    const finalResult =
      numbers.length > 1
        ? parseFloat(evaluate(numbers[0], numbers[1], operators[0])).toFixed(2)
        : parseFloat(numbers[0]).toFixed(2);

    if (finalResult === 'Infinity' || finalResult === '-Infinity') {
      setResult('Math error');
      setOperation('');
    } else if (finalResult === '0.00' || finalResult === '0') {
      setResult('0');
      setOperation('');
    } else {
      const isInteger = Number.isInteger(parseFloat(finalResult));

      setResult(
        isInteger
          ? parseFloat(finalResult).toFixed(0)
          : parseFloat(finalResult).toFixed(2)
      );
      setOperation(
        isInteger
          ? parseFloat(finalResult).toFixed(0)
          : parseFloat(finalResult).toFixed(2)
      );
    }
  };

  return (
    <CalculatorContext.Provider
      value={{
        result,
        setResult,
        operation,
        setOperation,
        del,
        reset,
        calculate,
        addToOperation,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContextProvider;
