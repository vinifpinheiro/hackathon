import { useRouter } from "next/router";
import Link from "next/link";

export default function DynamicPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Página com ID Dinâmico</h1>
      <p>ID: {id}</p>
      <Link href="/outra-pagina">Ir para outra página</Link>
    </div>
  );
}
