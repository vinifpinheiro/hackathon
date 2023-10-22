import { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/src/server/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      // Obtenha os dados enviados na solicitação POST
      const requestData = req.body;

      // Insira os dados em uma tabela (neste caso, o modelo User)
      const newUser = await db.user.create({
        data: {
          doc: requestData.doc,
          name: requestData.name,
          phone: requestData.phone,
          email: requestData.email,
          id_clerk: requestData.id_clerk,
          events: {},
        },
      });

      const responseMessage = "Usuário inserido com sucesso.";
      res.status(201).json({ message: responseMessage, user: newUser });
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
