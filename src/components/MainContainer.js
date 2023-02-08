import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [boughtStocks, setBoughtStocks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(data => setStocks(data))
  }, [])

  function onAddStockToPortfolio(addedStock) {
    setBoughtStocks([...boughtStocks, addedStock])
    console.log(boughtStocks)
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onAddStockToPortfolio={onAddStockToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer boughtStocks={boughtStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
