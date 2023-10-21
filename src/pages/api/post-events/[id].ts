import { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/src/server/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      // Obtenha os dados enviados na solicitação POST
      const requestData = req.body;

      // Insira os dados em uma tabela (neste caso, o modelo User)
      const newEvent = await db.event.create({
        data: {
          nm_event: requestData.nm_event,
          nm_user_id: requestData.nm_user_id,
          date: requestData.date,
          city: requestData.city,
          state: requestData.state,
          address: requestData.address,
          phone: requestData.phone,
          description: requestData.description,
          type: requestData.type,
        },
      });

      const responseMessage = "Usuário inserido com sucesso.";
      res.status(201).json({ message: responseMessage, user: newEvent });
    } catch (error) {
      console.error("Erro ao inserir usuário:", error);
      res.status(500).json({ message: "Erro ao inserir usuário." });
    } finally {
      await db.$disconnect();
    }
  } else {
    res.status(405).end(); // Retorna um código 405 se a solicitação não for um POST
  }
};
