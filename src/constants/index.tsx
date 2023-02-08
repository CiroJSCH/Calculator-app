export interface keys {
  value: string;
  space: number;
  color: string;
  shadow: string;
  textSize: string,
  textColor?: string,
}

const bgShadow = "shadow-[0px_-4px_0px_0px_var(--keySh)_inset]"
const bgShadowSec = "shadow-[0px_-4px_0px_0px_var(--keySecSh)_inset]"
const bgShadowToggle = "shadow-[0px_-4px_0px_0px_var(--toggleSh)_inset]"

const numberSize = "text-[32px]"
const functionSize = "text-[22px] tracking-[1px]"

const keys: keys[] = [
  {
    value: '7',
    space: 1,
    color: 'bg-key',
    shadow: bgShadow,
    textSize: numberSize,
    textColor: 'text-txtColor'
  },
  {
    value: '8',
    space: 1,
    color: 'bg-key',
    shadow: bgShadow,
    textSize: numberSize,
    textColor: 'text-txtColor'
  },
  {
    value: '9',
    space: 1,
    color: 'bg-key',
    shadow: bgShadow,
    textSize: numberSize,
    textColor: 'text-txtColor'
  },
  {
    value: 'DEL',
    space: 1,
    color: 'bg-keySec',
    shadow: bgShadowSec,
    textSize: functionSize,
    textColor: "text-txtWhite"
  },
  {
    value: '4',
    space: 1,
    color: 'bg-key',
    shadow: bgShadow,
    textSize: numberSize,
    textColor: 'text-txtColor'
  },
  {
    value: '5',
    space: 1,
    color: 'bg-key',
    shadow: bgShadow,
    textSize: numberSize,
    textColor: 'text-txtColor'
  },
  {
    value: '6',
    space: 1,
    color: 'bg-key',
    shadow: bgShadow,
    textSize: numberSize,
    textColor: 'text-txtColor'
  },
  {
    value: '+',
    space: 1,
    color: 'bg-key',
    shadow: bgShadow,
    textSize: numberSize,
    textColor: 'text-txtColor'
  },
  {
    value: '1',
    space: 1,
    color: 'bg-key',
    shadow: bgShadow,
    textSize: numberSize,
    textColor: 'text-txtColor'
  },
  {
    value: '2',
    space: 1,
    color: 'bg-key',
    shadow: bgShadow,
    textSize: numberSize,
    textColor: 'text-txtColor'
  },
  {
    value: '3',
    space: 1,
    color: 'bg-key',
    shadow: bgShadow,
    textSize: numberSize,
    textColor: 'text-txtColor'
  },
  {
    value: '-',
    space: 1,
    color: 'bg-key',
    shadow: bgShadow,
    textSize: numberSize,
    textColor: 'text-txtColor'
  },
  {
    value: '.',
    space: 1,
    color: 'bg-key',
    shadow: bgShadow,
    textSize: numberSize,
    textColor: 'text-txtColor'
  },
  {
    value: '0',
    space: 1,
    color: 'bg-key',
    shadow: bgShadow,
    textSize: numberSize,
    textColor: 'text-txtColor'
  },
  {
    value: '/',
    space: 1,
    color: 'bg-key',
    shadow: bgShadow,
    textSize: numberSize,
    textColor: 'text-txtColor'
  },
  {
    value: 'x',
    space: 1,
    color: 'bg-key',
    shadow: bgShadow,
    textSize: numberSize,
    textColor: 'text-txtColor'
  },
  {
    value: 'RESET',
    space: 2,
    color: 'bg-keySec',
    shadow: bgShadowSec,
    textSize: functionSize,
    textColor: "text-txtWhite"
  },
  {
    value: '=',
    space: 2,
    color: 'bg-toggle',
    shadow: bgShadowToggle,
    textSize: functionSize,
    textColor: "text-txtWhite"
  },
];

export default keys;
