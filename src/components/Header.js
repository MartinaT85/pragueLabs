import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  return (
    <header className="wrapper">
      <LogoContainer className="logo-container">
        <Link href="/">
          <a>
            <Image
              src="/pragueLabsLogo.svg"
              height={35}
              width={201}
              alt="logo"
            />
          </a>
        </Link>
      </LogoContainer>
    </header>
  );
};

const LogoContainer = styled.div`
  margin: 1rem 0;
`;

export default Header;
