import "./index.css";

function Card(props) {
    return (
      <div className="card">
        <img className="card-Img" src={props.imag} alt="profile_picture" />
        <h2 className="cardText">{props.name}</h2>
        <p>{props.description}</p>
      </div>
    );
  }
  
  
export default Card;