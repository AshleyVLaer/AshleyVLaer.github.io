import React, { useState, useEffect } from "react";
import styles from "./DetailContent.module.scss";

export default function DetailContent({ data, name, abilities, setAbilities }) {
  const [moves, setMoves] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (name) {
      let _moves = [];
      data.moves.map((item) => {
        let _index = _moves.findIndex((e) => e.name === item.learnMethod);
        if (_index !== -1) {
          const { learnMethod, ...rest } = item;
          _moves[_index].moves.push(rest);
        } else {
          const { learnMethod, ...rest } = item;
          _moves.push({ name: item.learnMethod, moves: [rest] });
        }
      });

      let _abilities = [];
      abilities.map((ability, idx) => {
        let _ability = data.abilities[idx] ?? false;
        _abilities.push(_ability);
      });
      setAbilities(_abilities);
      setMoves(_moves);
    }
  }, [name]);

  function handleAbility(item, idx, type) {
    switch (type) {
      case "delete":
        if (item) {
          setAbilities((prevState) => {
            const newState = [...prevState];
            newState[idx] = false;
            return newState;
          });
        }
        break;
      case "add":
        const _index = abilities.findIndex((e) => e === false);
        if (_index !== -1) {
          setAbilities((prevState) => {
            const newState = [...prevState];
            newState[_index] = item;
            return newState;
          });
        }
        break;

      default:
        break;
    }
  }

  return (
    <section className={styles.section}>
      <img src={data.image} alt={data.name} style={{ width: "200px", height: "200px" }} />
      <h2>Stats</h2>
      <ul>
        {data.stats.map((item, idx) => (
          <li key={idx}>
            <h4>{item.name.replace(/-/g, " ")}</h4>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
      <div className={styles.selectedMovesWrap}>
        <h2>Selected moves</h2>
        <div className={styles.selectedMoves}>
          {abilities.map((item, idx) => (
            <div key={idx} className={styles.selectedMovesItem} onClick={() => handleAbility(item, idx, "delete")}>
              {item ? (
                <>
                  <h4>{item.learnMethod ?? "Level up"}</h4>
                  <p>{item.name}</p>
                </>
              ) : (
                <p>Empty</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.movesMenu}>
        <h2>Moves</h2>
        <div className={styles.movesMenuHeader}>
          {moves &&
            moves.map((item, idx) => (
              <div key={idx} onClick={() => setSelected(idx)} className={styles.learnMethods}>
                <h4>{item.name}</h4>
                <div className={selected === idx ? `${styles.underline} ${styles.__active}` : styles.underline}/>
              </div>
            ))}
        </div>
        <div className={styles.moveBullets}>
          {moves &&
            moves[selected].moves.map((item, idx) => (
              <div key={idx} className={styles.bullet} onClick={() => handleAbility(item, idx, "add")}>
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
