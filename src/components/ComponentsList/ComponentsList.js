import * as React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import ButtonCustom from '../ButtonCustom/ButtonCustom';
import DropdownCustom from '../DropdownCustom/DropdownCustom';

function ComponentsList() {
  return (
    <div >
      <main className="flex-shrink-0">
        <div className="container">
          <h1 className="mt-5">Components</h1>
          Aca va un listado de todos los componenetes con un titulo del nombre
          <hr />
          <h2>Logo</h2>
          <Logo />
          <hr />
          <h2>ButtonCustom redondo grande</h2>
          <ButtonCustom text="A-Z" type="info" size="lg" rounded={true}/>
          <hr />
          <h2>ButtonCustom default pequeño</h2>
          <ButtonCustom text="Enviar" type="info" size="sm" />
          <hr />
          <h2>Barra de filtrado</h2>
          <DropdownCustom /> 
          <hr />
          <h2>Buscador</h2>
          <SearchBar />
          <hr />
          <h2>Paginacion. Cambio de pagina</h2>
          <Pagination />
        </div>
      </main>
    </div>
  );
}

function Logo() {
  return (
    <div className="col-8">
      <h1>Buscador de perros</h1>
    </div>
  );
}

export default ComponentsList;
