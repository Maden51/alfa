import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useGetSpellsQuery } from '../../redux/services/bookApi/book';
import { ColorRing } from 'react-loader-spinner';
import Spell from '../../components/Spell';
import WorkProps from '../../redux/services/bookApi/types';

function SpellList() {
  const { data, error, isLoading } = useGetSpellsQuery('');
  const [settledData, setSettledData] = useState<WorkProps[]>([]);
  const [likedFilter, setLikedFilter] = useState(false);

  const deleteFunction = (id: string) => {
    setSettledData(settledData.filter((spell) => spell.id !== id));
  };

  const toogleLike = (id: string) => {
    setSettledData((prevData) =>
      prevData.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product,
      ),
    );
  };

  useEffect(() => {
    if (data) {
      setSettledData(data);
    }
  }, [data]);

  const filteredSpells = likedFilter ? settledData.filter((spell) => spell.liked) : settledData;

  return (
    <>
      <input
        type="button"
        value="favourite spells"
        className={styles.filter}
        style={
          likedFilter
            ? {
                boxShadow:
                  'inset 0 0 20px rgba(0,0,0.25), 0 1.8px 0px rgba(255,255,255,.4),inset 0 2px 0 rgba(0,0,0,.1)',
              }
            : undefined
        }
        onClick={() => setLikedFilter(!likedFilter)}
      />
      <div className={styles.content}>
        {isLoading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        ) : error ? (
          <div>Something bad happened, pls refresh the page or contact support</div>
        ) : data ? (
          filteredSpells.map((spell) => (
            <Spell key={spell.id} {...spell} toggleLike={toogleLike} onDelete={deleteFunction} />
          ))
        ) : null}
      </div>
    </>
  );
}

export default SpellList;
