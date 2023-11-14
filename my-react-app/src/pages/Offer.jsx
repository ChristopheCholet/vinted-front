import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState;
  const [isLoading, setLoading] = useState(true);

  const id = useParams;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offer/" + id,
        );
        setData(response.data);
        setLoading(false);
        //console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      fetchData();
    };
  });

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <h2>{data.product_name}</h2>
      {data.product_details.map((detail, index) => {
        const keyName = Object.keys(detail);
        console.log(keyName[0]);
        return (
          <div>
            <span>{keyName[0]}</span>
            <span>{detail[keyName[0]]}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Offer;
