import * as React from "react";

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

      <main className="flex-shrink-0">
        <div class="container">
          <h1 class="mt-5">Sticky footer with fixed navbar</h1>
         
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
