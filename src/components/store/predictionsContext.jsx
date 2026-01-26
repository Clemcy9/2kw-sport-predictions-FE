// PredictionsContext.jsx
import { createContext, useContext, useState } from "react";

const PredictionsContext = createContext();

export function PredictionsProvider({ children }) {
  const [activeMarket, setActiveMarket] = useState(() => {
    return JSON.parse(sessionStorage.getItem("activeMarket")) || {
      id: 100,
      name: "freeTip",
      path: "/",
    };
  });

  const [marketCache, setMarketCache] = useState({}); 
  // { "Home_2026-01-26": { data, openState } }

  return (
    <PredictionsContext.Provider
      value={{ activeMarket, setActiveMarket, marketCache, setMarketCache }}
    >
      {children}
    </PredictionsContext.Provider>
  );
}

export const usePredictions = () => useContext(PredictionsContext);
