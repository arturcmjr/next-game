import axios from "axios";
import { GetServerSideProps, NextPage } from "next";

export interface IGameProps {}

export async function getServerSideProps(context: any): Promise<{ props: IGameProps }> {
  const { slug } = context.query;
  const res = await axios.post(
    "https://api.igdb.com/v4/games/",
    `fields *; limit 1; where slug = "${slug}";`
  );
  return {
    props: {
      data: res.data[0],
    },
  }
}

const Game: NextPage = (props: IGameProps) => {
  // console.log(props);
  return <>
  <div style={{height: '1920px'}}></div>
  </>;
};

export default Game;
