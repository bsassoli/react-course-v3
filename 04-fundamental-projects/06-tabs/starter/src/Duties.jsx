import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
    const renderedDuties = duties.map((duty, id) => {
        return (
          <div key={uuidv4()} className='job-desc'>
            <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        )}
    );
    return <div>{renderedDuties}</div>;
}
export default Duties;