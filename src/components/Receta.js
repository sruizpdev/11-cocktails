import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

const Receta = ({ receta }) => {
  const { guardarIdReceta } = useContext(ModalContext);
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img src={receta.strDrinkThumb} className="card-img-top" />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              guardarIdReceta(receta.idDrink);
            }}
          >
            Ver receta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receta;
