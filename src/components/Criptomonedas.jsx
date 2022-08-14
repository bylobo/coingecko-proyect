import React from "react";
import Criptomoneda from "./Criptomoneda";
import "../Styles/Criptomoneda.css";

const titles = ["#", "Coin", "Price", "Price Change", "24h Volume"];

const Criptomonedas = ({ coins, search }) => {
  const filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr className="text">
          {titles.map((title, i) => (
            <td key={i}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <Criptomoneda coin={coin} key={coin.name} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Criptomonedas;
