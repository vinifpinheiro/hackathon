import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../reusable/card";


export default function CardHome() {
  return (
      <Card className="max-w-[500px] ">
        <CardHeader>
          <CardTitle className='text-3xl'>Teste</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Local</p>
        </CardContent>
        <CardFooter>
          <p>Horario</p>
        </CardFooter>
      </Card>
  );
}
