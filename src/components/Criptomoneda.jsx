import React from "react";
import "../Styles/Criptomoneda.css";

const Criptomoneda = ({ coin, index }) => {
  return (
    <tr>
      <td className="text">{index}</td>
      <td>
        <img
          src={coin.image}
          alt={coin.name}
          style={{ width: "7%" }}
          className="me-4 img-fluid"
        />
        <span className="text">
          {coin.name}
          <span className="text">{coin.symbol}</span>
        </span>
      </td>
      <td className="text">{coin.current_price}</td>
      <td className="text">{coin.price_change_percentage_24h}</td>
      <td className="text">{coin.total_volume}</td>
    </tr>
  );
};

export default Criptomoneda;
