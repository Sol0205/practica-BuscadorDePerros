import React from 'react'

function SearchBar() {
   return (
      <div className= "col-4 navbar ">
         <form className="container-fluid d-flex ">
            <input
               className="form-control me-2 border-dark"
               type="search"
               placeholder="Search"
               aria-label="Search"
            />
         </form>
      </div>
   )
}

export default SearchBar;
