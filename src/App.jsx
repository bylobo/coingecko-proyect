import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./Styles/App.css";
import Criptomonedas from "./components/Criptomonedas";

function App() {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1";

  const fetchCharacters = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setCoins(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <>
      <Navbar brand="CoinGecko Proyect" />
      <section className="filtrar">
        <input
          type="text"
          name="buscar"
          placeholder="Nombre del personaje"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <Criptomonedas coins={coins} search={search} />
      )}
    </>
  );
}

export default App;
