import { useNavigate } from "react-router-dom";
import './Header.css';

type Args = {
    subtitle: string;
}

const Header = ({subtitle}: Args) => {
    const nav = useNavigate();

    return (
        <header className="row mt-4">
            <ul>
                <li className="link" onClick={() => nav('/')}>Home</li>
                <li className="link" onClick={() => nav('/studios')}>Studios</li>
                <li className="link" onClick={() => nav('/about')}>About</li>
            </ul>
        </header>
    )
}

export default Header;