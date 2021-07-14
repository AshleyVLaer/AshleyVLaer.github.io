import React from "react";
import styles from "./DetailView.module.scss";

export default function DetailView({ title, subtitle, handleClose, children, handleAction, button_text, open }) {

  return (
    <div className={open ? `${styles.detailView} ${styles._shown}` : styles.detailView}>
      <div className={styles.detailHeader}>
        <div className={styles.titles}>
          <h2>
            {title}
            <span>{subtitle}</span>
          </h2>
        </div>
      </div>
      <div className={styles.detailBody}>{children}</div>
      <div className={styles.detailFooter}>
        <button className={styles.btn} onClick={() =>  handleAction()}>
          {button_text}
        </button>
        <button className={styles.btnCancel} onClick={() => handleClose()}>
          Cancel
        </button>
      </div>
    </div>
  );
}


