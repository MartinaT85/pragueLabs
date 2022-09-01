import styled from "styled-components";
import Head from "next/head";
import { Heading } from "../src/components/LayoutComponents";
import { useCaravans } from "../src/lib/useFetch";

const Home = () => {
  const { caravans, isError, isLoading } = useCaravans("data");

  return (
    <PageWrapper>
      <Head>
        <title>Prague Labs</title>
        <meta name="description" content="Test zadanie z Prague Labs" />
      </Head>
      {isLoading ? <Heading>Loading...</Heading> : null}
      {isError ? <Heading>Sorry</Heading> : null}
      <section className="wrapper">
        <div className="grid">
          {caravans.items?.map((caravan) => {
            return <Heading key={caravan.pictures[1]}>{caravan.name}</Heading>;
          })}
        </div>
      </section>
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;

export default Home;
