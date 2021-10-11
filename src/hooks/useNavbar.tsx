import { useState, useEffect } from "react";
import axios from "axios";

const useNavbar = () => {
  const [navLinks, setNavLinks] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  const getNavbarMenu = async () => {
    const url = `${process.env.GATSBY_API_URL}/wp-json/menus/v1/menus/2`;

    try {
      const {
        data: { items },
      } = await axios.get(url);
      setNavLinks(items);
      setloading(false);
    } catch (error) {
      console.log(error);
      seterror(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getNavbarMenu();
  }, []);

  return { navLinks, loading };
};

export default useNavbar;
