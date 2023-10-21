import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Button } from "../reusable/button";
import { Input } from "../reusable/input";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../reusable/selectstate";

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

  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Criar um objeto JSON com os dados do formulário
    const formDataJSON = JSON.stringify(formData);

    // Log o objeto JSON no console
    console.log(formDataJSON);


    // Aqui, você pode enviar o objeto JSON para um servidor ou realizar outras ações.
  };

  useEffect(() => {
    // Fazer uma chamada à API do IBGE para buscar a lista de estados
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => response.json())
      .then((data) => {
        setEstados(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar estados:", error);
      });
  }, []);

  useEffect(() => {
    if (estadoSelecionado) {
      // Fazer uma chamada à API do IBGE para buscar as cidades do estado selecionado
      fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`,
      )
        .then((response) => response.json())
        .then((data) => {
          setCidades(data);
        })
        .catch((error) => {
          console.error("Erro ao carregar cidades:", error);
        });
    } else {
      // Limpar a lista de cidades quando nenhum estado estiver selecionado
      setCidades([]);
    }
  }, [estadoSelecionado]);

  return (
    <div className="mx-auto max-w-5xl rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Formulário do Evento</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="dataCriacao"
            className="block text-sm font-medium text-gray-600"
          >
            Nome do evento
          </label>
          <Input />
        </div>
        <div className="mb-4">
          <label
            htmlFor="nomeEvento"
            className="block text-sm font-medium text-gray-600"
          >
            Nome do Organizador
          </label>
          <Input />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dataCriacao"
            className="block text-sm font-medium text-gray-600"
          >
            Data e Hora
          </label>
          <Input type="date" />
        </div>
        <div className="mb-4">
          <label
            htmlFor="estado"
            className="block text-sm font-medium text-gray-600"
          >
            Estado
          </label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue
                placeholder="Selecione o estado"
                onChange={(e) => setEstadoSelecionado(e.target.value)}
              />
            </SelectTrigger>
            <SelectContent>
              {estados.map((estado) => (
                <SelectItem key={estado.id} value={estado.sigla}>
                  {estado.nome}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="cidade"
            className="block text-sm font-medium text-gray-600"
          >
            Cidade
          </label>
          <Input />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dataCriacao"
            className="block text-sm font-medium text-gray-600"
          >
            Endereço
          </label>
          <Input />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dataCriacao"
            className="block text-sm font-medium text-gray-600"
          >
            Telefone
          </label>
          <Input type="number" />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dataCriacao"
            className="block text-sm font-medium text-gray-600"
          >
            Descrição
          </label>
          <Input />
        </div>
        {/* Repita o bloco acima para os outros campos do formulário */}
        {/* Endereço, Telefone, Descrição, Tipo, etc. */}
        <Button className="w-full hover:bg-primary" variant="outline">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default EventoForm;
