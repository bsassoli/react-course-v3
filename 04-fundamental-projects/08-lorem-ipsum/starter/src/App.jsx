import { LiaChessPawnSolid } from 'react-icons/lia';
import text from './data';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(1);
  const [lorem, setLorem] = useState([]);
  const handleCount = (e) => {
    e.preventDefault();
    const paragraphs = text.slice(0, count);
    const renderedText = paragraphs.map((p, index) => <p key={index}>{p}</p>);
    setLorem(renderedText);

  }
  return (
    <section className='section-center'>
      <h3 className='title' style={{"textTransform": "uppercase"}}>
        Tired of boring lorem ipsums?
      </h3>
    <form
      id="lorem"
      className="lorem-form"
      onSubmit={handleCount}
      >
        <label className="lorem-label" htmlFor="count">Paragraphs</label>
        <input
          onChange={(e)=>setCount(e.target.value)}
          type="number"
          name="count"
          id="count"
          placeholder={count}
          min={1}
          max={8}
          />
        <button className='btn' type='submit'>
          generate
        </button>
    </form>
    <article className='lorem-text'>{lorem}</article>
    </section>

  )
};
export default App;
