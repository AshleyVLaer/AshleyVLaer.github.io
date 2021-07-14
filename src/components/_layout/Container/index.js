import styles from './Container.module.scss';

export default function Container(props) {
  return <div {...props} className={styles.root} />;
}
