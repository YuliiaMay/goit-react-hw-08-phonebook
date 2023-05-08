import { Link } from "react-router-dom";


const AppBar = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/phonebook">Phonebook</Link>
            </nav>
            
        </header>
    )
};

export default AppBar;