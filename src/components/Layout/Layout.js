import * as React from "react";
import SearchBar from '../SearchBar/SearchBar';
import Cards from '../Cards/Cards.js';
import DropdownCustom from '../DropdownCustom/DropdownCustom';
import Pagination from '../Pagination/Pagination';
import Dogs from '../../utils/constants/MockDogs.json';
import ButtonCustom from '../ButtonCustom/ButtonCustom';


function Layout() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="row">
            <Logo />
            <SearchBar />
          </div>
        </div>
      </header>
      <br />
      <div className="btn-toolbar" aria-label="Toolbar with button groups">
        <div className="container mt-auto py-3">
          <ButtonCustom text="A-Z" type="info" size="lg" rounded={true}/>
          <DropdownCustom /> 
        </div>
      </div>

      <main className="flex-shrink-0">
        <div className="container">
          <h1 className="mt-5">Components</h1>
          <Cards perros={Dogs}/>
        </div>

        {/* <DogCatalog /> */}
        {/* <aside>
        <FilterBar />
        </aside>
        <CardList /> */}
        <Pagination />
      </main>
    </div>
  );
}

export default Layout;

function Logo() {
  return (
    <div className="col-8">
      <h1>Buscador de perros</h1>
    </div>
  );
}
