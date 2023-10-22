import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "../reusable/button";
import { Input } from "../reusable/input";
import { ComboboxDemo } from "../reusable/comboselect";
import useStore from "../reusable/comboselect/zustand";
import { Select } from "../reusable/selectstate";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../reusable/selectstate";
import { useClerk } from "@clerk/nextjs";
import Image from "next/image";
import dayjs from "dayjs";

function EventoForm() {
  const { user } = useClerk();
  const [success, setSuccess] = useState(false);
  const { selected } = useStore();
  const [formData, setFormData] = useState({
    nm_event: "",
    date: "",
    city: "",
    state: "",
    address: "",
    phone: "",
    description: "",
    type: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      state: selected,
      date: formData.date.toString(),
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Criar um objeto JSON com os dados do formulário
    const formDataJSON = JSON.stringify(formData);
    console.log(formDataJSON);

    fetch(`/api/post-events/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: formDataJSON,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Sucesso:", data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });

    // Aqui, você pode enviar o objeto JSON para um servidor ou realizar outras ações.
  };

  return (
    <div>
      <div className="h-auto w-screen">
        <Image
          src={
            formData.type === "food"
              ? "https://images.unsplash.com/photo-1579705745811-a32bef7856a3?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : formData.type === "clothes"
              ? "https://images.unsplash.com/photo-1574681357916-9d4464642696?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : formData.type === "dinner"
              ? "https://images.unsplash.com/photo-1603208614636-aa308b918a32?auto=format&fit=crop&q=80&w=2944&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : formData.type === "toys"
              ? "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          width={1920}
          height={1080}
          className="max-h-[300px] w-full object-cover"
        />
      </div>
      <div className="relative bottom-20 mx-auto max-w-5xl rounded-md border bg-background p-6">
        <h2 className="mb-4 text-2xl font-semibold">Formulário do Evento</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 rounded-lg border bg-secondary p-4">
            <label
              htmlFor="nm_event"
              className="mb-2 block text-sm font-medium text-muted-foreground"
            >
              Nome do evento
            </label>
            <Input
              name="nm_event"
              value={formData.nm_event}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4 rounded-lg border bg-secondary p-4">
            <label
              htmlFor="type"
              className="mb-2 block text-sm font-medium text-muted-foreground"
            >
              Tipo:
            </label>
            <select
              name="type"
              onChange={handleInputChange}
              className="w-full rounded-md border border-border bg-background p-2 text-muted-foreground"
            >
              <option value="">Selecione um tipo</option>
              <option value="food">Alimentos</option>
              <option value="clothes">Roupas</option>
              <option value="dinner">Jantar</option>
              <option value="toys">Brinquedos</option>
              <option value="others">Outros</option>
            </select>
          </div>
          <div className="mb-4 rounded-lg border bg-secondary p-4">
            <label
              htmlFor="nomeEvento"
              className="mb-2 block  text-sm font-medium text-muted-foreground"
            >
              Nome do Organizador
            </label>
            <Input
              disabled
              name="nm_user_id"
              onChange={handleInputChange}
              value={user?.fullName!}
            />
          </div>
          <div className="mb-4 rounded-lg border bg-secondary p-4">
            <label
              htmlFor="dataCriacao"
              className="mb-2 block  text-sm font-medium text-muted-foreground"
            >
              Data e Hora
            </label>
            <Input
              type="date"
              name="date"
              onChange={handleInputChange}
              value={formData.date}
            />
            <Input
              className="mt-2"
              type="time"
              name="hour"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4 rounded-lg border bg-secondary p-4">
            <label
              htmlFor="estado"
              className="mb-2 block  text-sm font-medium text-muted-foreground"
            >
              Estado
            </label>
            <ComboboxDemo />
          </div>
          <div className="mb-4 rounded-lg border bg-secondary p-4">
            <label
              htmlFor="cidade"
              className="mb-2 block  text-sm font-medium text-muted-foreground"
            >
              Cidade
            </label>
            <Input
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4 rounded-lg border bg-secondary p-4">
            <label
              htmlFor="dataCriacao"
              className="mb-2 block  text-sm font-medium text-muted-foreground"
            >
              Endereço
            </label>
            <Input
              value={formData.address}
              name="address"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4 rounded-lg border bg-secondary p-4">
            <label
              htmlFor="dataCriacao"
              className="mb-2 block  text-sm font-medium text-muted-foreground"
            >
              Telefone
            </label>
            <Input
              value={formData.phone}
              type="tel"
              name="phone"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4 rounded-lg border bg-secondary p-4">
            <label
              htmlFor="dataCriacao"
              className="mb-2 block  text-sm font-medium text-muted-foreground"
            >
              Descrição
            </label>
            <Input
              value={formData.description}
              name="description"
              onChange={handleInputChange}
            />
          </div>
          <Button
            className="w-full"
            variant="outline"
            size={"lg"}
            type="submit"
            onClick={() => {
              setTimeout(() => {
                setSuccess(true);
              }, 3000);
            }}
          >
            Enviar
          </Button>
          {success && (
            <div className="flex justify-center">
              <Button variant={"outline"} className="mt-10 p-8">
                <p className="p-5 text-2xl text-emerald-800 dark:text-emerald-300">
                  Evento criado com sucesso! 😉
                </p>
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default EventoForm;
