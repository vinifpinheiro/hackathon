import Head from "next/head";
import EventoForm from "../components/Form";
import { useEffect } from "react";
import { useClerk } from "@clerk/nextjs";
import userStore from "../components/zustand";

function NewEvent() {
  const { user } = useClerk();
  const { isLogged, setIsLogged } = userStore();

  useEffect(() => {
    if (!isLogged && user) {
      fetch("/api/post-user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doc: "",
          name: (user.firstName + " " + user?.lastName) as string,
          phone: user.phoneNumbers[0]!.phoneNumber as string,
          email: user.emailAddresses.map(
            (email) => email.emailAddress,
          )[0] as string,
          id_clerk: user!.id,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (setIsLogged) {
            setIsLogged(true);
          }
          console.log("Sucesso:", data);
        })
        .catch((error) => {
          console.error("Erro:", error);
        });
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>EventBuddy | Criar Evento</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <EventoForm />
      </main>
    </>
  );
}

export default NewEvent;
