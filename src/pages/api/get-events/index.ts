import { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/src/server/db";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    db.event
      .findMany({
        include: {
          nm_user: true,
        },
      })
      .then((events) => {
        res.status(200).json(events);
      })
      .catch((error) => {
        console.error("Erro ao buscar eventos:", error);
        res.status(500).json({ message: "Erro ao buscar eventos." });
      })
      .finally(async () => {
        await db.$disconnect();
      });
  }
};
