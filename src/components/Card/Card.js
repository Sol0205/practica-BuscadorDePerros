import React from 'react'; 
import './Card.css';



function Card() {
    return (

    <div className="card">
        <img src="https://picsum.photos/id/237/200" className="card-img-top" alt="foto de perro beagle" />
        <div className="card-body">
            <h4 className="card-title">Beagle</h4>
            {/* text-primary || text-secundary || text-danger || text-warning */}
            <p className= "card-text text-secundary">Altura: 36 cm.</p>
            <p className= "card-text text-secundary">Peso: 12 kg</p>
            <a href="#" className="btn btn-primary">Ver mas.</a>
        </div>
    </div>

    )
}



export default Card
