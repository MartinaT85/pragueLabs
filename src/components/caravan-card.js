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
}) => {
  return (
    <Link href={href}>
      <a>
        <StyledContainer>
          <Image src={imgUrl} alt="" height={190} width={400} />

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
