import { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/src/server/db";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { id } = req.query;
    db.user
      .findUnique({
        where: {
          id_clerk: id?.toString(),
        },
      })
      .then((user) => {
        if (!user) {
          res.status(401).json({ message: "Usuário não encontrado." });
        } else {
          res.status(200).json(user);
        }
      })
      .catch((error) => {
        console.error("Erro ao obter usuário:", error);
        res.status(500).json({ message: "Erro ao obter usuário." });
      })
      .finally(async () => {
        await db.$disconnect();
      });
  } else {
    res.status(405).end();
  }
};
