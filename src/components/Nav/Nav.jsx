import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import RandomButton from "./RandomButton";

export default function Nav(props) {
  return (
    <div className={styles.container}>
      <Link to="/home"  style={{ textDecoration: 'none' }}>
        <span>Home</span>
      </Link>


      <Link to="/about" style={{ textDecoration: 'none' }}>
        <span>About</span>
      </Link>
      <Link to="/favorites" style={{ textDecoration: 'none' }}>
        <span >Favorites</span>
      </Link>
      <SearchBar onSearch={props.onSearch} />

      {/*<span>
      <RandomButton />

      </span>*/}
    </div>
  );
}
