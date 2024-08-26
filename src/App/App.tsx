import styles from './styles.module.css';
import SpellList from '../containers/spellList';

function App() {
  return (
    <div className={styles.backGround}>
      <div className="container">
        <main className={styles.content}>
          <h1 className={styles.title}>Заклинания волшебного мира Джоан Роулинг</h1>
          <SpellList />
        </main>
      </div>
    </div>
  );
}

export default App;
