import React from 'react';
import WorkProps from '../../redux/services/bookApi/types';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Like from '../Like';
import Delete from '../Delete';

function Spell(props: WorkProps) {
  const handleLike = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    props.toggleLike(props.id);
  };

  const handleDelete = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    props.onDelete(props.id);
  };

  return (
    <Link to={`/spells/${props.id}`} className={styles.content}>
      <h1 className={styles.title}>{props.name}</h1>
      <div className={styles.control}>
        <button className={props.liked ? styles.liked : styles.unliked} onClick={handleLike}>
          <Like liked={props.liked} />
        </button>
        <button className={styles.delete} onClick={handleDelete}>
          <Delete />
        </button>
      </div>
    </Link>
  );
}

export default Spell;
