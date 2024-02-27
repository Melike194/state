import Cars from './Cars';
import './App.css';
import {useState} from 'react';

 function getRandomCars(){
   const carArray=['Car1','Car2','Car3','Car4','Car5','Car6'];
   return carArray[Math.floor(Math.random()*carArray.length)]
}
function App() {

   const [cars,setCars]=useState([]);
   const handleClick=()=>{
     setCars([...cars,getRandomCars()]);
   };
   const carList=cars.map((car,index)=>{
    return <Cars key={index} carName={car} />;
   });
  return (
    <div className="App">
       <button className="appButton" onClick={handleClick}>Araba Ekle</button> 
       <div className='carList'>{carList} </div>
    </div>
  );
}

export default App;
