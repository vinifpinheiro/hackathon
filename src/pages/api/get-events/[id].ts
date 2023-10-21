import { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/src/server/db";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { id } = req.query;
    db.event
      .findUnique({
        where: {
          id: Number(id),
        },
      })
      .then((event) => {
        if (!event) {
          res.status(401).json({ message: "Evento não encontrado." });
        } else {
          res.status(200).json(event);
        }
      })
      .catch((error) => {
        console.error("Erro ao obter evento:", error);
        res.status(500).json({ message: "Erro ao obter evento." });
      })
      .finally(async () => {
        await db.$disconnect();
      });
  } else {
    res.status(405).end();
  }
};
