import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "../reusable/button";
import { Input } from "../reusable/input";
import { ComboboxDemo } from "../reusable/comboselect";
import useStore from "../reusable/comboselect/zustand";
import { Select } from "../reusable/selectstate";
import { SelectArrow } from "@radix-ui/react-select";
  import {
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../reusable/selectstate";
  import { Check, ChevronDown } from "lucide-react";

function EventoForm() {
  const { selected, setSelected } = useStore();
  const [formData, setFormData] = useState({
    nomeEvento: "",
    nomeOrganizador: "",
    dataHora: "",
    estado: selected,
    cidade: "",
    endereco: "",
    telefone: "",
    descricao: "",
    tipo: "",
  });



  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aqui você pode usar formData para enviar os dados do formulário.
    console.log(formData);
    console.log(selected);
  };

  return (
    <div className="mx-auto max-w-5xl rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Formulário do Evento</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="nomeEvento"
            className="block text-sm font-medium text-gray-600"
          >
            Nome do evento
          </label>
          <Input
            type="text"
            name="nomeEvento"
            value={formData.nomeEvento}
            onChange={handleInputChange}
          />
        </div>
        <label
          htmlFor="nomeEvento"
          className="block text-sm font-medium text-gray-600"
        >
          Tipo:
        </label>
        <Select>
          <SelectTrigger className="mb-4 w-[180px]">
            <SelectValue placeholder="Tipo do evento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Arrecadação de Alimentos</SelectItem>
            <SelectItem value="dark">Doação de Roupas</SelectItem>
            <SelectItem value="system">Jantar de Caridade</SelectItem>
            <SelectItem value="system">Doação Brinquedos</SelectItem>
          </SelectContent>
        </Select>
        <div className="mb-4">
          <label
            htmlFor="nomeOrganizador"
            className="block text-sm font-medium text-gray-600"
          >
            Nome do Organizador
          </label>
          <Input
            type="text"
            name="nomeOrganizador"
            value={formData.nomeOrganizador}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dataHora"
            className="block text-sm font-medium text-gray-600"
          >
            Data e Hora
          </label>
          <Input
            type="date"
            name="dataHora"
            value={formData.dataHora}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="estado"
            className="block text-sm font-medium text-gray-600"
          >
            Estado
          </label>
          <ComboboxDemo />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cidade"
            className="block text-sm font-medium text-gray-600"
          >
            Cidade
          </label>
          <Input
            type="text"
            name="cidade"
            value={formData.cidade}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="endereco"
            className="block text-sm font-medium text-gray-600"
          >
            Endereço
          </label>
          <Input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="telefone"
            className="block text-sm font-medium text-gray-600"
          >
            Telefone
          </label>
          <Input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="descricao"
            className="block text-sm font-medium text-gray-600"
          >
            Descrição
          </label>
          <Input
            type="text"
            name="descricao"
            value={formData.descricao}
            onChange={handleInputChange}
           
          />
        </div>
        {/* Adicione os campos restantes do formulário aqui */}
        <Button
          className="w-full hover:bg-primary"
          variant="outline"
          type="submit"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default EventoForm;
