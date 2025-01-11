import Sidebar from '@renderer/components/Sidebar/Sidebar';
import styles from './App.module.scss';
import Content from '@renderer/components/Content/Content';

const App = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
