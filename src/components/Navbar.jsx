import React from 'react';

const Nav = ({ filterCategory }) => {
  return (
    <div className='nav-2'>
      <h3 onClick={() => filterCategory("breakfast")}>Breakfast</h3>
      <h3 onClick={() => filterCategory("lunch")}>Lunch</h3>
      <h3 onClick={() => filterCategory("dinner")}>Dinner</h3>
      <h3 onClick={() => filterCategory(null)}>All</h3>
    </div>
  );
};

export default Nav;
