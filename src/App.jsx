import React from 'react';
import Nav from './components/Navbar';
import Card from './components/Card';
import Menu from './components/menuApi';
import './App.css';

function menuItems(data) {
  return (
    <Card
      key={data.id}
      itemNo={data.itemNo}
      name={data.name}
      category={data.category}
      description={data.description}
      price={data.price}
      image={data.image}
    />
  );
}

function App() {
  const [filteredData, setFilteredData] = React.useState(Menu);

  const filterCategory = (category) => {
    if (category) {
      const updatedList = Menu.filter((curElem) => curElem.category === category);
      setFilteredData(updatedList);
    } else {
      setFilteredData(Menu);
    }
  };

  return (
    <div className="main">
      <Nav filterCategory={filterCategory} />
      <div className="container">{filteredData.map(menuItems)}</div>
    </div>
  );
}

export default App;
