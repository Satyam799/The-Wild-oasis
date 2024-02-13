import styled from "styled-components"
import HeaderMenu from "./HeaderMenu"
import UserAvatar from "../features/authentication/UserAvatar"
import Darkmodetoggle from "./Darkmodetoggle"

const Styledheader=styled.header`
   background-color :var(--color-grey-0);;
   padding:1.2rem 4.8rem ;
   border-bottom:3px solid var(--color-grey-100);
   display: flex;

   gap: 2.4 rem;
  align-items: center;
  justify-content: flex-end;
`


function Header() {
    return (
        <Styledheader>
             <UserAvatar/>
            <HeaderMenu/>
            <Darkmodetoggle/>
        </Styledheader>
    )
}

export default Header
