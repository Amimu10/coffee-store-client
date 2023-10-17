import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/signUp">SignUp</NavLink>
            <NavLink to="/home">Home</NavLink>
        </div>
    );
};

export default Header;