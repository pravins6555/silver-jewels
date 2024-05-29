import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
max-width: 60rem;
    margin: auto;
    padding: 2rem;
    display: flex;
    justify-content: center;
`;

const MenuList = styled.ul`
display: flex;
    gap: 1rem;
    list-style-type: none;
`;

const MenuItem = styled.li`
text-decoration: none;
color: var(--color-primary-400);
`;


function Navbar() {
return(
   <Header >
    <nav>
        <MenuList >
            <MenuItem>
                <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/about">About</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/form">Contact</Link>
            </MenuItem>
        </MenuList>
    </nav>
   </Header>
)
}

export default Navbar;