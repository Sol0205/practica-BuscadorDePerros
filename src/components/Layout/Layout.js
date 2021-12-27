import * as React from "react";
import Card from '../Card/Card';

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
        <div className="container">
          <h1 className="mt-5">Filter, etc</h1> 
        </div>
      <nav>
        
      </nav>

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

function SearchBar() {
  return (
    <div className="col-4">
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
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
