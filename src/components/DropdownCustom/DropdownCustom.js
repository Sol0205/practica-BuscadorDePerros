import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

function DropdownCustom() {
    const [dropdown, setDropdown]=useState(false)
    const abrirCerrarDropdown=()=>{
        setDropdown(!dropdown);
    }
    return (
        <div className="classDropdown">         
            <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} direction="right">
                <DropdownToggle caret>
                    Voy a filtrar por...
                </DropdownToggle>

                <DropdownMenu>
                    <DropdownItem> Pelaje </DropdownItem>
                    <DropdownItem> Temperamento </DropdownItem>
                    <DropdownItem> Tamaño </DropdownItem>
                    <DropdownItem> Genero </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

{/* 
    <button  className="btn btn-secondary dropdown-toggle show" type="button" >
        Filtrar por
        <ul className="dropdown-menu show-list ">  
            <li><a className="dropdown-item" href="#">Action1</a></li>
            <li><a className="dropdown-item" href="#">Action2</a></li>
        </ul>
    </button> 
*/}

export default DropdownCustom;

