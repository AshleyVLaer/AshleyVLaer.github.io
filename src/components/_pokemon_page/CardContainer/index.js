import React from "react";
import styles from "./CardContainer.module.scss";

export default function CardContainer({ cards, handleCardClick }) {
  return (
    <>
      <div className={styles.cardContainer}>
        {cards.map((item, idx) => (
          <div key={idx} className={item ? `${styles.cardItem} ${styles[item.types[0].name]} ${styles.__active}` : styles.cardItem} onClick={() => handleCardClick(item, idx)}>
            {item ? (
              <div className={styles.cardItemInner}>
                <img src={item.image} alt={item.name}/>
                <h3>{item.name}</h3>
                <div>
                  {item.abilities.map((ability, idx) => {
                    return ability ? (
                      <div key={idx} className={styles.ability}>
                        <p>{ability.name}</p>
                      </div>
                    ) : (
                      <div key={idx} />
                    );
                  })}
                </div>
              </div>
            ) : (
              "Empty"
            )}
          </div>
        ))}
      </div>
    </>
  );
}
