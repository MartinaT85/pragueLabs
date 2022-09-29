import styled from "styled-components";
import Head from "next/head";
import { Heading } from "../src/components/LayoutComponents";
import { useCaravans } from "../src/lib/useFetch";
import CaravanCard from "../src/components/caravan-card";
import { useState } from "react";

const Home = () => {
  const [visible, setVisible] = useState(6)
  const { caravans, isError, isLoading } = useCaravans("data");
  const showMoreItems = () => {
      setVisible(prevValue => prevValue + 3)
  }
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
            {caravans.items?.slice(0, visible).map((caravan) => {
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
          <div style={{display: 'flex', justifyContent: 'center', margin: '2rem 0', width: '100%'}}>

          <button onClick={showMoreItems} style={{justifyContent: 'center'}}>Načíst další</button>
          </div>
        </section>
      )}
    </PageWrapper>
  );
};

const PageWrapper = styled.main``;

export default Home;
