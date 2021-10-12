import { useState, useEffect } from "react";
import axios from "axios";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  const getBlogs = async () => {
    const url = `${process.env.GATSBY_API_URL}/wp-json/wp/v2/posts`;

    try {
      const { data } = await axios.get(url);
      setBlogs(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      seterror(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return { blogs, loading };
};

export default useBlogs;
