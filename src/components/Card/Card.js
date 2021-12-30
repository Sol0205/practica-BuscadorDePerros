import React from "react";
import PropTypes from "prop-types";
import './Card.css';

function Card(props) {
  return (
    <div className="card bg-light" >
      <img src={props.cardInfo.img} alt="" />
      <div className="card-body text-dark">
        <h3 className="card-title align-baseline fw-bolder fs-4">{props.cardInfo.title}</h3>
        {/* text-primary || text-secundary || text-danger || text-warning */}
        <br />
        <p className="card-text text-secundary align-baseline fs-5">{props.cardInfo.altura}</p>
        <p className="card-text text-secundary align-baseline fs-5">{props.cardInfo.peso}</p>
        <div className="row">
          <a href="https://www.hillspet.es/dog-care/dog-breeds/beagle" className="btn btn-primary col align-self-end fs-5">
            Ver mas.
          </a>
        </div>
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
