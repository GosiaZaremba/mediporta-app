import { useState, useEffect } from "react";
import axios from "axios";

interface ApiResponse<T> {
  items: T[];
}

export interface Tag {
  name: string;
  count: number;
}

const useFetchData = <T>(
  pageNumber: string,
  pageSize: string
): { data: T[] | null; loading: boolean; error: string | null } => {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = `https://api.stackexchange.com/2.3/tags?page=${pageNumber}&pagesize=${pageSize}&order=desc&sort=popular&site=stackoverflow&filter=!*MO(WDa3IX4kJzaW`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse<T>>(apiUrl);
        setData(response.data.items);
        setLoading(false);
      } catch (err) {
        setError("Błąd podczas pobierania danych");
        setLoading(false);
      }
    };

    fetchData();
  }, [pageSize, apiUrl]);

  return { data, loading, error };
};

export default useFetchData;
