import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DynamicPage() {
  const router = useRouter();
  const { id } = router.query;
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("/api/get-events")
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
        console.log("Sucesso:", data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }, []);

  return (
    <div>
      <h1>Página com ID Dinâmico</h1>
      <p>ID: {id}</p>
      <Link href="/outra-pagina">Ir para outra página</Link>
    </div>
  );
}
