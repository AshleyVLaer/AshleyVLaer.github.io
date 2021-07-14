import React from "react";
import styles from "./SearchList.module.scss";
import FeatherIcon from "feather-icons-react";
import Spinner from "../../_default/Spinner";
import Logo from "../../_default/Logo";

export default function SearchList({ list, placeholder, value, onChange, onClick, loading, error }) {
  return (
    <div className={styles.SearchListWrap}>
      <div className={styles.searchHeader}>
        <Logo />
        <div className={styles.search}>
          <input placeholder={placeholder ?? ""} value={value ?? ""} type="text" onChange={onChange} />
          <FeatherIcon icon="search" size="25" />
        </div>
      </div>

      {loading ? <Spinner /> : error ? <p>Something went wrong</p> : <ul>{list && list.length > 0 ? list.map(({ id, name }) => <li key={id} onClick={() => onClick(name)}>{name}</li>) : <li>No results for: {value}</li>}</ul>}
    </div>
  );
}
