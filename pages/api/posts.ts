import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    await fetch("http://localhost:3001/items", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: req.body,
    });

    return res.status(201).json({ hola: "mundo" });
  }

  return res.status(200).json({ hola: "mundo" });
};

export default handler;
