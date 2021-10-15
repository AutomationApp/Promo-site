import { useState, useEffect } from "react";
import axios from "axios";

const useTerms = () => {
  const [pageData, setPageData] = useState<any>();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  const getPageData = async () => {
    const url = `${process.env.GATSBY_API_URL}/wp-json/wp/v2/pages/183`;

    try {
      const { data } = await axios.get(url);
      setPageData(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      seterror(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getPageData();
  }, []);

  return { pageData, loading };
};

export default useTerms;
