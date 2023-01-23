// import { Link } from "@yext/pages/components";

import { Link } from "react-router-dom";
import "../assets/css/card.css";

type CardProps = {
    order:any;
  name: any;
  description:any;
  image:any;
};
const CardList = ({ name,image,description,order}: CardProps) => {
  return (
    <>
      {/* <div className="main-container"> */}
      <div className="centered-container" style={{display:"flex"}}>
        <div className="section">
      <div className="grid grid-cols-2 gap-x-10 gap-y-10">
        <div className="cards">
          <div className="card card-1">
            <div className="card__icon">
              <i className="fas fa-bolt" />
            </div>
            <p className="card__exit">
              <i className="fas fa-times" />
            </p>
            <h2 className="card__title">{name}</h2>
            <p>{image}</p>
            <p className="card__apply">
            <p>{description}</p>

              <button className="card-button">
                <Link className="card__link" to={order}>
                  {"Order Now"}
                  <i className="fas fa-arrow-right" />
                </Link>
              </button>
            </p>
          </div>
        </div>
        </div>
        </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default CardList;
