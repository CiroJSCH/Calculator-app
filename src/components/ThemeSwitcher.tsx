type Props = {
  theme: number;
  setTheme: (value: number) => void;
};

const ThemeSwitcher = ({ theme, setTheme }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTheme(Number(e.target.value));

  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-txtColor font-bold text-3xl'>calc</h1>
      <div className='flex gap-8 items-center mt-6'>
        <p className='text-txtColor text-[13px] font-bold tracking-[1.2px]'>
          THEME
        </p>
        <div className='flex flex-col w-[75px] items-center relative'>
          <div className='flex absolute -top-6 justify-between text-txtColor font-bold text-[13px] w-[80%]'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
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
