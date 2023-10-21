import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../reusable/card";
import Image from "next/image";

export default function CardHome() {
  return (
    <Card className="max-w-[500px] overflow-hidden">
      <Image
        src=""
        alt="Picture of the author"
        width={500}
        height={500}
        className=" left-0 top-0 max-h-[180px] opacity-75"
      ></Image>

      <div className="relative bottom-10 bg-background">
        <CardHeader>
          <CardTitle className="z-20 text-3xl">Teste</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Local</p>
        </CardContent>
        <CardFooter>
          <p>Horario</p>
        </CardFooter>
      </div>
    </Card>
  );
}
