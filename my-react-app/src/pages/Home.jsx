import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers",
        );
        // console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      {data.offers.map((offer, index) => {
        return (
          <Link key={offer._id} to={`/offer/${offer._id}`}>
            <p>{offer.product_name}</p>
            <img src={offer.product_image.secure_url}></img>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
