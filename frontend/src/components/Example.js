import React, { useEffect, useState } from "react";
import axios from "axios";

const Example = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("/example")
      .then(response => setData(response.data.message))
      .catch(err => console.error(err));
  }, []);

  return <div>{data}</div>;
};

export default Example;
