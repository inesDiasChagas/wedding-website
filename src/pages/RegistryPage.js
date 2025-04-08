import React, { useState, useEffect } from "react";

import Registry from "../components/Registry/Registry";
import getApiUrl from "../utils/User";

const StoryPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = getApiUrl("GUESTS");

  const fetchGuestsData = React.useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchGuestsData();
  }, [fetchGuestsData]);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  if (error) {
    return <h1>Erro: {error}</h1>;
  }

  return data.guests && <Registry guests={data.guests} />;
};

export default StoryPage;
