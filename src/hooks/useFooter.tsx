import { useState, useEffect } from "react";
import axios from "axios";

const useFooter = () => {
  const [footerData, setFooterData] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  const getFooterMenu = async () => {
    const url = `${process.env.GATSBY_API_URL}/wp-json/wp/v2/pages/46`;

    try {
      const { data } = await axios.get(url);
      setFooterData(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      seterror(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getFooterMenu();
  }, []);

  return { footerData, loading };
};

export default useFooter;
