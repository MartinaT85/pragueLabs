import styled from "styled-components";
import { Heading } from "../src/components/LayoutComponents";
import { useCaravans } from "../src/lib/useFetch";

const Home = () => {
  const { caravans, isError, isLoading } = useCaravans("data");

  return (
    <PageWrapper>
      {isLoading ? <Heading>Loading...</Heading> : null}
      {isError ? <Heading>Sorry</Heading> : null}
      {caravans.items?.map((caravan) => {
        return <Heading key={caravan.pictures[1]}>{caravan.name}</Heading>;
      })}
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;

export default Home;
