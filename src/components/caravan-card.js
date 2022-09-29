import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const CaravanCard = ({
  href,
  imgUrl,
  location,
  vehicleType,
  name,
  passengersCapacity,
  sleepCapacity,
  shower,
  toilet,
  instantBookable,
  price,
  pictures
}) => {
  return (
    <Link href={href}>
      <a>
        <StyledContainer>
          <Image src={pictures[0]} alt="" height={190} width={392} />

          <StyledContent>
            <Styledh3>{vehicleType}</Styledh3>
            <h2>{name}</h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderTop: "1px solid #edeae3",
                borderBottom: "1px solid #edeae3",
                margin: "0.5rem 0",
                padding: "0.5rem 0",
              }}
            >
              <div>
                <p style={{ fontSize: ".875rem", marginBottom: ".5rem" }}>
                  {location}
                </p>
              </div>
              <div>
                <Image
                  src={"/icons/Icon-Bed Copy.svg"}
                  alt=""
                  height={20}
                  width={20}
                />
                <p className="inline fs14">{passengersCapacity}</p>
                <Image
                  src={"/icons/Icon-Bed.svg"}
                  alt=""
                  height={20}
                  width={20}
                />
                <p className="inline fs14">{sleepCapacity}</p>
                {shower ? (
                  <Image
                    src={"/icons/Icon-Bed Copy 3.svg"}
                    alt=""
                    height={20}
                    width={20}
                  />
                ) : null}
                {toilet ? (
                  <Image
                    src={"/icons/Icon-Bed Copy 2.svg"}
                    alt=""
                    height={20}
                    width={20}
                  />
                ) : null}
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p style={{color: '#9C8C8C'}}>Cena od</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '.25rem'}}>

              <p style={{fontWeight: 'bold'}}>{`${price} Kč/den`} </p>
              {
                instantBookable ? <Image
                  src={"/icons/ActionFilter.svg"}
                  alt=""
                  height={16}
                  width={16}
                /> : null
                }
              </div>
            </div>
          </StyledContent>
        </StyledContainer>
      </a>
    </Link>
  );
};

const Styledh3 = styled.h3`
  font-size: 0.75rem;
  font-weight: bold;
  color: #ff5e55;
`;

const StyledContainer = styled.div`
  border: 1px solid #edeae3;
  border-radius: 8px;
  height: 100%;
`;

const StyledContent = styled.div`
  padding: 1rem;
`;

const StyledLine = styled.div`
  border-top: 1px solid #edeae3;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export default CaravanCard;
