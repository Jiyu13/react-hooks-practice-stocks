import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [boughtStocks, setBoughtStocks] = useState([])
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(data => setStocks(data))
  }, [])

  function onAddStockToPortfolio(addedStock) {
    setBoughtStocks([...boughtStocks, addedStock])
  }

  function onFilterChange(selected) {
    setFilter(selected)
  }
  
  const filterResults = stocks.filter(stock => {
    if (filter === "All") {
      return true
    } else {
      return stock.type === filter
    }
    
  })


  return (
    <div>
      <SearchBar onFilterChange={onFilterChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={filterResults}
            onAddStockToPortfolio={onAddStockToPortfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer boughtStocks={boughtStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
