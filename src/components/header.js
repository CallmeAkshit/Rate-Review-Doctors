import Login from './login';
import logo from './logo.svg';

function header() {
    return (
        <div>
            <header className="content">
                <img src={logo} className="logo" alt="logo" />
                <a href="#" className="nav-links-first">
                    Home
                </a>
                <Login />
            </header>
        </div>
    );
}

export default header;
