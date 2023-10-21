import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "../reusable/button";
import { Input } from "../reusable/input";


interface FormData {
  dataCriacao: string;
  nomeEvento: string;
  nomeOrganizador: string;
  dataHora: string;
  estado: string;
  cidade: string;
  endereco: string;
  telefone: string;
  descricao: string;
  tipo: string;
}

function EventoForm() {
  const [formData, setFormData] = useState<FormData>({
    dataCriacao: "",
    nomeEvento: "",
    nomeOrganizador: "",
    dataHora: "",
    estado: "",
    cidade: "",
    endereco: "",
    telefone: "",
    descricao: "",
    tipo: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aqui, você pode enviar os dados para o servidor ou fazer o que desejar com eles.
    console.log(formData);
  };

  return (
    <div className="mx-auto max-w-lg rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Formulário do Evento</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="dataCriacao"
            className="block text-sm font-medium text-gray-600"
          >
            Data de Criação do Evento
          </label>
          <input
            type="date"
            id="dataCriacao"
            name="dataCriacao"
            value={formData.dataCriacao}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="nomeEvento"
            className="block text-sm font-medium text-gray-600"
          >
            Nome do Evento
          </label>
          <input
            type="text"
            id="nomeEvento"
            name="nomeEvento"
            value={formData.nomeEvento}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        {/* Repita o bloco acima para os outros campos do formulário */}
        {/* Nome do Organizador, Data/Hora, Estado, Cidade, Endereço, Telefone, Descrição e Tipo */}
        <Button className="w-full" variant="outline">
          Button
        </Button>
      </form>
    </div>
  );
}

export default EventoForm;
