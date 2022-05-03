import React, { useEffect } from "react";
import axios from "axios";

const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

function Quotes() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(data);
  if (!data) return null;

  return (
    <div>
      <p>
          {data.count}
          {data.message}
          

      </p>
    </div>
  );
}

export default Quotes;
