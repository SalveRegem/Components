import React from 'react';
import "../assets/Style/Images.css";

const img = (car) => (car.img ? car.img : null);
const alt = (car) => (car.alt ? car.alt : "aucune informations alt disponible");

const Images = ({ car }) => {
  return (
    <>
      {car.img ? (
        <img src={img(car)} alt={alt(car)} />
      ) : (
        <p>Aucune photo disponible</p>
      )}
    </>
  );
};

export default Images;