import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useGetSpellsQuery } from '../../redux/services/bookApi/book';
import { ColorRing } from 'react-loader-spinner';
import Spell from '../../components/Spell';
import WorkProps from '../../redux/services/bookApi/types';

function SpellList() {
  const { data, error, isLoading } = useGetSpellsQuery('');
  const [settledData, setSettledData] = useState<WorkProps[]>([]);
  const [filteredData, setFilteredData] = useState<WorkProps[]>([]);
  const [likedFilter, setLikedFilter] = useState(false);

  const deleteFunction = (id: string) => {
    setSettledData(settledData.filter((spell) => spell.id !== id));
  };

  const handleLikedFilter = () => {
    setLikedFilter(!likedFilter);
    if (likedFilter) {
      setFilteredData(settledData.filter((spell) => spell.like === true));
    }
  };

  useEffect(() => {
    if (data) {
      setSettledData(data);
    }
  }, [data]);

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
        onClick={handleLikedFilter}
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
          settledData.map((spell: WorkProps) => {
            return <Spell onDelete={deleteFunction} key={spell.id} {...spell} />;
          })
        ) : null}
      </div>
    </>
  );
}

export default SpellList;
