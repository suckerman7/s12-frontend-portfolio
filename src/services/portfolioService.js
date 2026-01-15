import api from "./api";
import enData from "../data/en.json";
import trData from "../data/tr.json";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

export const postPortfolioData = async (language) => {

  const payload = language === "tr" ? trData : enData;

  if (USE_MOCK) {
    console.log("You're in mock mode.");
    return new Promise((resolve) => 
      setTimeout(() => resolve(payload), 500)
    );
  }

  const response = await api.post("/workintech", payload);
  return response.data;
};