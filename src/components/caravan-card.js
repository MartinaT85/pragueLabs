import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const CaravanCard = ({
  instantBookable,
  location,
  name,
  passengersCapacity,
  picture,
  price,
  shower,
  sleepCapacity,
  toilet,
  vehicleType,
  href,
  imgUrl,
}) => {
  return (
    <Link href={href}>
      <a>
        <StyledContainer>
          <Image src={imgUrl} alt="" height={190} width={400} />

          <StyledContent>
            <Styledh3>{vehicleType}</Styledh3>
            <h2>{name}</h2>
            <StyledLine />
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
