import React from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = (props) => {
  console.log(props);
  return (
    <li className={styles.photo}>
      <img src={props.photo.src} alt={props.photo.title} />
      <span className={styles.visualizacao}>{props.photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
