import { NextApiRequest, NextApiResponse } from "next";
import igdbInstance from "../../../services/igdbInstance";

export interface IListPlatformsForNavbar {
  id: number;
  name: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await igdbInstance.post(
    "https://api.igdb.com/v4/platforms",
    `fields name, generation; limit 500; where id = (130,169,167,6);`
  );
  res.send(result.data);
};