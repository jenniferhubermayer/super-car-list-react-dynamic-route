import { Link } from "react-router-dom";

const CarDetails = (props) => {
    return ( 
        <div className="grid-item">
            <h3>{props.model}</h3>
            <Link to={`/${props.id}`}>Read more</Link>
      </div>
     );
}
 
export default CarDetails;