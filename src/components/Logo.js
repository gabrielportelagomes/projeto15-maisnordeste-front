import styled from "styled-components";

function Logo() {
  return (
    <LogoContainer>
      <div>
        <Plus>+</Plus>
        <Nordeste>Nordeste</Nordeste>
      </div>
    </LogoContainer>
  );
}

export default Logo;

const LogoContainer = styled.div`
  position: absolute;
  top: -110px;
  left: 40px;
  div {
    position: relative;
  }
`;

const Plus = styled.div`
  font-family: "Permanent Marker", cursive;
  font-weight: 400;
  font-size: 128px;
  color: rgba(255, 255, 255, 0.35);
  text-shadow: -10px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  top: 80px;
  left: -40px;
`;
const Nordeste = styled.p`
  font-family: "Parisienne", cursive;
  font-weight: 400;
  font-size: 36px;
  color: #dddddd;
`;
