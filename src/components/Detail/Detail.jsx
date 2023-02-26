import styles from "./Detail.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail(props) {
  const [infoDetail, setInfo] = useState({});

  const { id } = useParams(); 
  const navigate = useNavigate();

  function backToHome() {
    navigate("/home");
  }

  useEffect(() => {
    
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          console.log(char.origin.name);
          setInfo(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });

    return () => setInfo({});
  }, []);

  return (
    <div>
      <div className={styles.div}>
        <button onClick={backToHome} className={styles.button}>Volver</button>
      </div>
      {infoDetail.id ? (
        <div className={styles.contenedor}>
          <h1 className={styles.name}>{infoDetail.name}</h1>
          <h5 className={styles.status}>{infoDetail.status}</h5>
          <h5 className={styles.species}>{infoDetail.species}</h5>
          <h5 className={styles.gender}>{infoDetail.gender}</h5>
          <h5 className={styles.origin}>{infoDetail.origin?.name}</h5>
          <div>
            <img src={infoDetail.image} alt={infoDetail.name} className={styles.img}/>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
