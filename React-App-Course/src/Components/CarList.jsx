import React from "react";
import Images from "./Image";
import Cars from "../data/CarsData";
import "../assets/Style/CarList.css"
import CarModal from "./Modal";




  const CarList = () => {
    const year = new Date().getFullYear();
        return (
        <div className="car-container">
          <ul className="car-list">
            {Cars.map((car, index) => (
              <li key={index} className="car-item">
                <p> {car.name}</p>
                <p> {car.color ? car.color :"Aucun colori disponible sur le site"}</p>
                <p> {car.prix ? car.prix : "Aucun prix disponible sur le site"}</p>
                <p>{car.available ? "disponible chez nous" : "cette voiture n'est pas encore disponible"}</p>
                <p>{car.année ? year - car.année + " ans " : "Aucune donnée disponible" }</p>
                <Images car={car} />
                <CarModal car={car}/>
              </li>
              ))}
          </ul>
        </div>
        );
      };
   


export default CarList