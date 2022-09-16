import cars from "../cars.json"
import CarDetails from "../Components/CarDetails";

const Home = () => {
    return (
        <div className="grid">
        {cars.map((car, index) => (
            <CarDetails
                key={"CarDetails" + index}
                id={car.id}
                model={car.carModel}
                />
      ))}
      </div>);
    };

export default Home;