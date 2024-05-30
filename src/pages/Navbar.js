import { Link } from "react-router-dom";
import styled from "styled-components";


const Header = styled.header`
    
    margin: auto;
    
    display: flex;
    justify-content: center;
`;



const MenuList = styled.ul`
display: flex;
    gap: 1rem;
    list-style-type: none;
    float: right;
    margin-right: 20px;
`;

const MenuItem = styled.li`
text-decoration: none;
color: var(--color-primary-400);
text-transform: uppercase;
`;

const NavLink = styled.a`
text-decoration: none;
font-weight: 700;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {    
    margin: 0px 10px;
  }`



function Navbar() {
return(
   <Header >
    <nav>
        <MenuList >
            <MenuItem>
                <NavLink href="/">Home</NavLink>
            </MenuItem>
            
            <MenuItem>
                <NavLink href="/about">About</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink href="/products">Products</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink href="/contact">Contact</NavLink>
            </MenuItem>
        </MenuList>
    </nav>
    
   </Header>
)
}

export default Navbar;