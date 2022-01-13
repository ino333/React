import { NavLink, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import './NavLinkStyle.css'

const Profiles = () => {
    const activeStyle = {
        background: 'orange',
        color: 'white'
    };
    
    return(
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <NavLink
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                        to="/profiles/velopert"
                    >
                        velopert
                    </NavLink>
                </li>
                <li>
                <NavLink
                    className={({ isActive }) => isActive ? 'navLinkStyle' : '' }
                    to="/profiles/gildong"
                >
                    gildong
                </NavLink>
                </li>
            </ul>
            <Routes>
                <Route
                    path="*"
                    element={<div>사용자를 선택하시오.</div>}
                />
                <Route path=":username" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default Profiles;