import React from 'react';

function Search (props) {
  return (
    <form class="form-inline my-2 my-lg-0">
      <input 
        class="form-control mr-sm-2" 
        type="search"
        value={props.isi} 
        placeholder={props.placeholder}
        onChange={e => props.onChangeFunction(e)}
      />
      <button class="btn btn-outline-dark my-2 my-sm-0 mr-lg-5" type="submit" aria-label="Search">
        <i class="fa fa-fw fa-search"></i>
      </button>
    </form>
  )
}
export default Search;