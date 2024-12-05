import styles from './MainPage.module.scss';

const MainPage: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.inner}>
        <h1 className="title">Main Page </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus laudantium, porro temporibus excepturi adipisci consequatur in exercitationem reprehenderit, odit nam perspiciatis sequi maiores repudiandae ea officiis, at fuga consequuntur incidunt.</p>
      </div>
    </div>
  );
};

export default MainPage;
