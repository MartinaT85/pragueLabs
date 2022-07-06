import NextImage from "next/image";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <div className="wrapper">
        <LogoContainer className="logo-container">
          <NextImage src="/pragueLabsLogo.svg" height={35} width={201} />
        </LogoContainer>
      </div>
    </>
  );
};

const LogoContainer = styled.div`
  margin: 1rem 0;
`;

export default Header;
