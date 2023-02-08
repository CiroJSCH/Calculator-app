// Components
import Key from "./Key";

// Constants
import keys from "../constants/index";

type Props = {
  theme: number
}

const Keypad = ({theme}: Props) => {
  return (
    <section className="bg-toggleBg w-full h-auto rounded-lg mt-6 p-4 xl:p-5 grid grid-cols-4 gap-3 xl:gap-5">
      {
        keys.map(key => (
          <Key key={key.value} item={key} theme={theme}/>
        ))
      }
    </section>
  )
}

export default Keypad