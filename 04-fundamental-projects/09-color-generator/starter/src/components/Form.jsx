import { useState } from "react";

const Form = ({ addColor }) => {

    const [color, setColor] = useState("");
    const handleChange = (e) => setColor(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color)};

    return (

        <section className="container">
            <h4>color generator</h4>
            <form onSubmit={handleSubmit} className="color-form">

                    <input type="color" id="color" name="color" value={color} onChange={handleChange}/>
                    <input type="text" id="color" name="color" value={color} placeholder='#f15025' onChange={handleChange}/>

                <button type="submit" className="btn">Submit</button>
            </form>
        </section>
    );
};

export default Form;

//In the Form component, set up a color state value and a form with an two input fields (color and text). Set up a handleChange function to update the color state value and a handleSubmit function to add the color to the list.
