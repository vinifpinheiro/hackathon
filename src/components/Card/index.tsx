import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../reusable/card";
import Image from "next/image";
import dayjs from "dayjs";
import { Badge } from "../reusable/badge";

export interface CardHomeProps {
  nm_event: string;
  address: string;
  date: string;
  hour: string;
  type: "food" | "clothes" | "dinner" | "toys" | "others" | "";
}

export default function CardHome(props: CardHomeProps) {
  return (
    <Card className="max-w-[500px] overflow-hidden">
      <Image
        src={
          props.type === "food"
            ? "https://images.unsplash.com/photo-1579705745811-a32bef7856a3?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : props.type === "clothes"
            ? "https://images.unsplash.com/photo-1574681357916-9d4464642696?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : props.type === "dinner"
            ? "https://images.unsplash.com/photo-1603208614636-aa308b918a32?auto=format&fit=crop&q=80&w=2944&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : props.type === "toys"
            ? "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Picture of the author"
        width={500}
        height={500}
        className=" left-0 top-0 max-h-[180px] object-cover opacity-75"
      ></Image>

      <div className="relative bottom-10 bg-background">
        <CardHeader>
          <CardTitle className="z-20 text-3xl">{props.nm_event}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{props.address}</p>
          <p>{dayjs(props.date).format("D MMMM YYYY hh:mm")}</p>
          <p>{props.hour}</p>
          <p>{props.hour}</p>
          <Badge variant={"default"} className="relative top-6">
            <p>
              {props.type === "food"
                ? "Alimentos"
                : props.type === "clothes"
                ? "Roupas"
                : props.type === "dinner"
                ? "Jantar"
                : props.type === "toys"
                ? "Brinquedos"
                : "Outros"}
            </p>
          </Badge>
        </CardContent>
      </div>
    </Card>
  );
}
