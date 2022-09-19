import React from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = (props) => {
  function handleClick() {
    props.setModalPhoto(props.photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={props.photo.src} alt={props.photo.title} />
      <span className={styles.visualizacao}>{props.photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
