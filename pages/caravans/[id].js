import { useRouter } from "next/router";

const Caravan = () => {
  const router = useRouter();
  console.log(router);
  return <h2>Here comes a caravan info</h2>;
};

export default Caravan;
