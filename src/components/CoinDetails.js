import React from "react";

const CoinDetails = props => {
  const { market } = props;

  const marketMap = market.map((e, i) => {
    return (
      <div key={i} className="buys">
        <h5 className="price">
          Price: <span>{e.price}</span>
        </h5>
        <h5 className="quantity">Quantity: {e.quantity}</h5>
        <h5 className="type">Type: {e.side}</h5>
      </div>
    );
  });

  return <div className="market">{marketMap}</div>;
};

export default CoinDetails;
