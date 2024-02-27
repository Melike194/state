import Car1 from './image/car1.jpg';
import Car2 from './image/car2.jpg';
import Car3 from './image/car3.jpg';
import Car4 from './image/car4.jpg';
import Car5 from './image/car5.jpg';
import Car6 from './image/car6.jpg';
import './Cars.css';

const carMap={
    Car1,
    Car2,
    Car3,
    Car4,
    Car5,
    Car6,
};

function Cars({carName}){
    // console.log(Car1);
    // console.log(carName);
    console.log(carMap[carName]);
    return(
        <div className='carDiv'>
              <img className='car' src={carMap[carName]} alt="car" /> 
        </div>
    );
}

export default Cars;