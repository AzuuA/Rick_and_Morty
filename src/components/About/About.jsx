import styles from "./About.module.css";
export default function About(props) {
  return (
    <div className={styles.div}>
      <h1> Bienvenido/a!</h1>
      
      <p>Mi nombre es Azul Arangui, tengo 21 años, soy de Argentina y estudiante de SoyHenry.
        En esta pagina podras agregar, a un personaje de rick and morty, podras elegir a tus favoritos y agregarlos a <span>Favorite</span>. Ademas podes ver los detalles de cada personaje.
        Ademas ( dentro de poco ) va haber una seccion para que te elija un personaje random.<br/>
        Espero que disfruten la pagina.</p>
    </div>
  );
}
