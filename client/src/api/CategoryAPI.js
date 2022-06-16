import axios from "axios";
import React, { useEffect, useState } from "react";

const CategoryAPI = () => {
  const [categories, setCategories] = useState([]);
  const [callback, setCallBack] = useState(false);
  const getCategory = async () => {
    const res = await axios.get("/api/category");
    setCategories(res.data);
  };
  useEffect(() => {
    getCategory();
  }, [callback]);

  return {
    categories: [categories, setCategories],
    callback: [callback, setCallBack],
  };
};

export default CategoryAPI;
