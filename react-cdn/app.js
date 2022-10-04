function Header() {
    return (
        <header>
            <div className="container">
                My great app
            </div>
        </header>
    );
}

function Body() {
    return (
        <main>
            <div className="container">
                <h1>Home (React)</h1>
                <p>This is one great app.</p>
            </div>
        </main>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('app'));