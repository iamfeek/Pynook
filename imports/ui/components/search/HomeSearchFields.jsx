import React from 'react';

export default HomeTextSearch = () => <input id="textSearch" placeholder="Finding something?" />;

export default HomeTypeSearch = () => {
  return (
    <select id="searchType">
      <option value="">Experience</option>
        <option value="Learn">Learn</option>
        <option value="Socialize">Socialize</option>
        <option value="Buy">Buy</option>
    </select>
  )
}

export default HomeCategorySearch = () => {
  return(
    <select id="searchCategory">
      <option value="">Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Sports">Sports</option>
        <option value="Creative">Creative</option>
        <option value="Services">Services</option>
        <option value="Handicraft">Handicraft</option>
    </select>
  )
}
