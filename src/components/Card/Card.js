import React from "react";
import PropTypes from "prop-types";
import './Card.css';

function Card(props) {
  return (
    <div className="card bg-light" >
      <img src={props.cardInfo.img} alt="" />
      <div className="card-body text-dark">
        <h4 className="card-title">{props.cardInfo.title}</h4>
        {/* text-primary || text-secundary || text-danger || text-warning */}
        <p className="card-text text-secundary">{props.cardInfo.altura}</p>
        <p className="card-text text-secundary">{props.cardInfo.peso}</p>
        <a href="#" className="btn-ver-mas btn btn-primary rounded-0">
          Ver mas.
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  cardInfo: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    altura: PropTypes.string.isRequired,
    peso: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
