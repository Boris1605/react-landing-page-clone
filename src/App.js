import styles from './App.module.scss';
// import logo from './logo.svg';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.leftContent}>
            <nav>
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Pricing</a>
                </li>
                <li>
                  <a href="/">Use Case</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.logo}>
            <img
              src="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64b9a8b87d7ee6f947910e82_rewind-icon.svg"
              alt="Logo"
            />
          </div>
          <nav>
            <a href="/" className={`button ${styles.getRewindLink}`}>
              Get Rewind
            </a>
          </nav>
        </header>
        <main>
          <section className={styles.middleSection}>
            <div
              className={`${styles.comingSoonText} ${styles.comingSoonButton}`}
            >
              Coming soon to Windows!
            </div>

            <h1>
              Your AI assistant
              <br /> that has all the
              <br /> context
            </h1>
            <p>
              Rewind is a personalized AI powered by everything
              <br /> you've seen, said, or heard. Your colleagues will
              <br /> wonder how you do it all.
            </p>
            <div className="inputContainer">
              <input placeholder="Enter your email" type="email" />
              <button className={styles.getRewindButton}>Get Rewind</button>
            </div>
          </section>
          {/* <section>
            <div>
              <img src="/" alt="Demovideo" />
            </div>
          </section> */}
          {/* <section>
            <h2>Professionals use Rewind to get more done, faster.</h2>
          </section> */}
          {/* <section></section> */}
        </main>
        <footer />
      </div>
    </div>
  );
}
