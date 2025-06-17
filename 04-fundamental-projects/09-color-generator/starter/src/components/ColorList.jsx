import Color from "./Color";
import { nanoid } from 'nanoid';
const ColorList = ({ colors }) => {
  const renderedColors = colors.map((c, index) => <Color key={nanoid()} index={index} color={c} />);
  return <section className="colors">
    {renderedColors}
    </section>;
};

export default ColorList;
