import * as React from "react";
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import DropdownCustom from '../DropdownCustom/DropdownCustom';

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
      <div className="container mt-auto py-3 bg-light">
        <DropdownCustom /> 
      </div>

      <main className="flex-shrink-0">
        <div className="container">
          <h1 className="mt-5">Components</h1>
          <Card />
        </div>

        {/* <DogCatalog /> */}
        {/* <aside>
        <FilterBar />
        </aside>
        <CardList /> */}
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
