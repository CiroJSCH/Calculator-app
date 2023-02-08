// Interface
import { keys } from '../constants/index';

type Props = {
  item: keys;
  theme: number
};

const Key = ({ item, theme }: Props) => {
  return <div className={`${item.color} ${item.shadow} ${item.space === 1 ? "col-span-1" : "col-span-2"} flex items-center justify-center rounded-lg font-bold ${item.textSize} ${item.textColor} py-2 min-h-[64px] ${theme === 3 && item.value === "=" && "text-txtColorSec"} cursor-pointer hover:brightness-125 transition duration-200`}>
    {item.value}
    </div>;
};

export default Key;
