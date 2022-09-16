import cars from "../cars.json"
import { useParams } from "react-router-dom";

const DetailPage = () => {
    let params = useParams();
    let car = cars[params.id - 1];
    return (
        <article className="grid-item">
            <h2>{car.carModel}</h2>
            <h2>{car.CarMake}</h2>
            <h2>{car.CarYear}</h2>
        </article>
    );
}

export default DetailPage;