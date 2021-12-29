import React from 'react';
import PropTypes from "prop-types";
import Card from '../Card/Card';

function Cards(props) {
    return (
        <div className="container d-flex justify-content-center h-100">
            <div className="row">
                {
                    props.perros.map(perro => (
                        <div className="col-md-3 mb-4" key={perro.id}>
                            <Card cardInfo={perro} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

Cards.propTypes = {
    perros: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string,
        title: PropTypes.string,
        altura: PropTypes.string,
        peso: PropTypes.string,
    })).isRequired
}

export default Cards


