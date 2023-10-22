import { getAuth } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/src/server/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.headers;
  const { userId } = await getAuth(req);

  if (req.method === "POST") {
    try {
      // Obtenha os dados enviados na solicitação POST
      const requestData = req.body;
      console.log("requestData", requestData);
      // Insira os dados em uma tabela (neste caso, o modelo User)
      const newEvent = await db.event.create({
        data: {
          nm_event: requestData.nm_event,
          nm_user: {
            connect: {
              id_clerk: userId!,
            },
          },
          date: new Date(),
          city: requestData.city,
          state: requestData.state,
          address: requestData.address,
          phone: requestData.phone,
          description: requestData.description,
          type: requestData.type,
        },
      });

      const responseMessage = "Evento criado com sucesso.";
      res.status(201).json({ message: responseMessage, event: newEvent });
    } catch (error) {
      console.error("Erro ao inserir usuário:", error);
      res.status(500).json({ message: "Erro ao inserir evento." });
    } finally {
      await db.$disconnect();
    }
  } else {
    res.status(405).end(); // Retorna um código 405 se a solicitação não for um POST
  }
};
