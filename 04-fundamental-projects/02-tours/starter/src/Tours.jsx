
import Tour from './Tour';
const Tours = ({ tours, callback }) => {
    const renderedTours = tours.map((tour) => <Tour key={tour.id} tour={tour} onClickHandler={callback}/>);
    return <div className="tours">
        {renderedTours}
    </div>
};
export default Tours;