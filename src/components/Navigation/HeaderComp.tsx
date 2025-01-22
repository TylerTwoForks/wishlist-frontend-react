import '../../css/Header.css';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Person2Icon from '@mui/icons-material/Person2';
import {Link} from 'react-router';

export function HeaderComp() {
    const links = new Map<String, String>([
        ["/wishlists", "Wish Lists"]
    ]);

    return (
        <>
            <header className="header">
                <a href={"/"} className="logo">
                    <div >
                        <FormatListBulletedIcon/>
                    </div>
                    <div className={"listeroo-name"}>Listeroo</div>
                </a>
                <div className="nav-links">
                    {Array.from(links.entries()).map(([key, value]) => (
                        <Link to={key.toString()} key={key.toString()} className="nav-link">
                            {value.toString()}
                        </Link>
                    ))}
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className="profile-icon">
                    <Person2Icon/>
                </div>
            </header>
        </>
    );
}