import styled from "styled-components";
import Header from "./Header";

export const Heading = styled.h1`
  margin: 0;
`;

const LayoutComponents = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default LayoutComponents;
