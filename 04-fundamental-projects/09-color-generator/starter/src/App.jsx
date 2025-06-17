import { ToastContainer, toast } from 'react-toastify';
import {  ColorList, Form } from './components';
import { useState } from 'react';
import Values from 'values.js';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <h2>Color Generator Starter</h2>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </>
  )

};
export default App;
