import styles from './App.module.scss';
// import logo from './logo.svg';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className="Logo" />
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
            <img
              src="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64b9a8b87d7ee6f947910e82_rewind-icon.svg"
              alt="Logo"
            />
            <img
              src="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64c088267e8881a7472517a4_rewind-logotype.svg"
              alt="LogoText"
            />
          </nav>
          <nav>
            <a href="/" className="button">
              Get Rewind
            </a>
          </nav>
        </header>
        <main>
          <section>
            <div>Coming soon to Windows!</div>
            <h1>Your AI assistant that has all the context</h1>
            <p>
              Rewind is a personalized AI powered by everything you’ve seen,
              said, or heard. Your colleagues will wonder how you do it all.
            </p>
            <input placeholder="Enter your email" type="email" />
            <a href="/">Get Rewind</a>
          </section>
          <section>
            <div>
              <img src="/" alt="Demovideo" />
            </div>
          </section>
          <section>
            <h2>Professionals use Rewind to get more done, faster.</h2>
          </section>
          <section></section>
        </main>
        <footer />
      </div>
    </div>
  );
}
