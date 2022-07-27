import { NextPage } from "next";

const Games: NextPage<any> = (props: { bling: any }) => {
  const { bling } = props;
  console.log(bling);
  return (
    <>
    </>
  );
};

export default Games;