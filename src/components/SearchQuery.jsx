import React from 'react'

function SearchQuery({setQuery,query}) {
    const querySub = (e) => {
        e.preventDefault();
        console.log("Search query submitted:", query);
    }
  return (
    <div>
      <form onSubmit={querySub}>
        <input type="text" placeholder="Search..." value={query} 
        onChange={(e)=> setQuery(e.target.value)} />
      </form>
    </div>
  )
}

export default SearchQuery
