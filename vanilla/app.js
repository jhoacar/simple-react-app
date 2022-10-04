function Header() {
    const $header = document.createElement('header');
    $header.innerHTML = `
        <div>
            Header in Vanilla Javascript
        </div>
    `;
    return $header;
}

function Body() {
    const $body = document.createElement('main');
    $body.innerHTML = `
        <div>
            <h1>Home (Vanilla)</h1>
            <p>Using vanilla javascript</p>
        </div>
    `;
    return $body;
}

function App() {
    const $app = document.createElement('div');
    $app.appendChild(Header());
    $app.appendChild(Body());
    return $app;
}

document.getElementById('app').appendChild(App());