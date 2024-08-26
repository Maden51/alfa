import styles from './styles.module.css';
import { Link, useParams } from 'react-router-dom';
import { useGetSpellQuery } from '../../redux/services/bookApi/book';
import { TailSpin } from 'react-loader-spinner';

function SpellPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetSpellQuery(id);

  return isLoading ? (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}></TailSpin>
  ) : error ? (
    <div className={styles.error}>
      <Link to={'/alfa'}>No such page, pls go back to the start.</Link>
    </div>
  ) : data ? (
    <div className={styles.backGround}>
      <div className="container">
        <main className={styles.content}>
          <h1 className={styles.title}>{data.name}</h1>
          <div className={styles.info}>
            <ul className={styles.list}>
              <li className={styles.item}>Incantation: {data.incantation}</li>
              <li className={styles.item}>Effect: {data.effect}</li>
              <li className={styles.item}>Can be Verbal: {data.canBeVerbal ? 'Yes' : 'No'}</li>
              <li className={styles.item}>Type: {data.type}</li>
              <li className={styles.item}>
                Creator: {data.creator === null ? 'Unknown' : data.creator}
              </li>
              <li className={styles.item}>
                Light color:
                <div className={styles.color} style={{ background: `${data.light}` }}>
                  {data.light}
                </div>
              </li>
            </ul>
          </div>
          <Link to={'/alfa'} className={styles.link}>
            Go back to spells
          </Link>
        </main>
      </div>
    </div>
  ) : null;
}

export default SpellPage;
