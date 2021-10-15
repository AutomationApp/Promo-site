import { useState, useEffect } from "react";
import axios from "axios";

const useFeatures = () => {
  const [pageData, setPageData] = useState<any>();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  const getData = async () => {
    const url = `${process.env.GATSBY_API_URL}/wp-json/wp/v2/pages/197`;

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
    getData();
  }, []);

  return { pageData, loading };
};

export default useFeatures;
