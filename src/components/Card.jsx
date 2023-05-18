import "./Card.css";

export default function Card(props) {
  return (
    <div className="card2">
      <div className="content">
        <img src={props.imagen} className="card-img-top rounded-4" alt="..." />

        <p className="heading">{props.titulo}</p>
        <p className="para">
        {props.descripcion}
        </p>
        <button className="btn">Read more</button>
      </div>
    </div>
    //     <div className="card" style={{width: '18rem'}}>
    //       <img src={props.imagen} className="card-img-top" alt="..." />
    //       <div className="card-body bg-dark-subtle">
    //         <h5 className="card-title">{props.titulo}</h5>
    //         <p className="card-text pb-2">{props.descripcion}</p>
    //         <button class="learn-more">
    //   <span class="circle" aria-hidden="true">
    //   <span class="icon arrow"></span>
    //   </span>
    //   <span class="button-text">Learn More</span>
    // </button>
    //       </div>
    //     </div>
  );
}
