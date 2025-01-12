import '../../css/Header.css';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Person2Icon from '@mui/icons-material/Person2';

export function HeaderComp() {
    return (
        <header className="header">
            <div className="logo">
                <FormatListBulletedIcon/>
                Listeroo
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="profile-icon">
                <Person2Icon/>
            </div>
        </header>
    );
}