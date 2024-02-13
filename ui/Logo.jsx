import styled from "styled-components";
import { Uppost } from "../src/context/Darkmode";
import Dark from "../logo-dark.png"
import Light from "../logo-light.png"


const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {

  const  {Darkmode}=Uppost()

  const Src=Darkmode?Dark:Light
  return (
    <StyledLogo>
      <Img src={Src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
