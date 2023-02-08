import React from "react";
import Stock from "./Stock";

function PortfolioContainer( {boughtStocks, onDeleteStock} ) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
        boughtStocks.map(stock => 
          <Stock key={stock.id} 
                 stock={stock} 
                 onStockClick={onDeleteStock} 
          />
        )
      }
    </div>
  );
}

export default PortfolioContainer;
