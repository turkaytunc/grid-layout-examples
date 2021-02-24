import './app.scss';

function App() {
  return (
    <div className="app">
      <h1>Holy Grail</h1>
      <section className="grid-container-1">
        <header className="header visual">Header</header>
        <aside className="aside-1 visual">Aside-1</aside>
        <main className="main visual">Main Content</main>
        <aside className="aside-2 visual">Aside-2</aside>
        <footer className="footer visual">Footer</footer>
      </section>
      <h1>Blog with Sticky Header</h1>
      <section className="grid-container-2">
        <header className="header visual">Header</header>
        <main className="main visual">Main Content</main>
        <aside className="ads visual">Ads</aside>
        <footer className="footer visual">Footer</footer>
      </section>
      <h1>Pancake</h1>
      <section className="grid-container-3">
        <header className="header visual">Header</header>
        <main className="main visual">Main Content</main>
        <footer className="footer visual">Footer</footer>
      </section>
    </div>
  );
}

export default App;
