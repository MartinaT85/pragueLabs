import styled from "styled-components";
import Head from "next/head";
import { Heading } from "../src/components/LayoutComponents";
import { useCaravans } from "../src/lib/useFetch";
import CaravanCard from "../src/components/caravan-card";

const Home = () => {
  const { caravans, isError, isLoading } = useCaravans("data");
  console.log(caravans);
  return (
    <PageWrapper>
      <Head>
        <title>Prague Labs</title>
        <meta name="description" content="Test zadanie z Prague Labs" />
      </Head>
      {isLoading ? <Heading>Loading...</Heading> : null}
      {isError ? (
        <Heading>Sorry, something went wrong...</Heading>
      ) : (
        <section className="wrapper">
          <div className="grid">
            {caravans.items?.map((caravan) => {
              return (
                <CaravanCard
                  key={caravan.pictures[1]}
                  href={`/caravans/${caravan.name.replace(" ", "")}`}
                  imgUrl="/caravan.jpeg"
                  {...caravan}
                ></CaravanCard>
              );
            })}
          </div>
        </section>
      )}
    </PageWrapper>
  );
};

const PageWrapper = styled.main``;

export default Home;
