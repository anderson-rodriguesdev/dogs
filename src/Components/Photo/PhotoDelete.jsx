import React from 'react';
import styles from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';

const PhotoDelete = (props) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar a foto?');
    if (confirm) {
      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_DELETE(props.id, token);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
