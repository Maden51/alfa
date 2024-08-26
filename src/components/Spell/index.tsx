import React from 'react';
import WorkProps from '../../redux/services/bookApi/types';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={props.liked ? 'red' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </button>
        <button className={styles.delete} onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </button>
      </div>
    </Link>
  );
}

export default Spell;
