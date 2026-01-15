import api from "./api";
import enData from "../data/en.json";
import trData from "../data/tr.json";

export const postPortfolioData = async (language) => {
  const payload = language === "tr" ? trData : enData;

  const response = await api.post("/workintech", payload);

  return response.data;
};