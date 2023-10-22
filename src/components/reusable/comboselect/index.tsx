"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cx } from "class-variance-authority";
import { Button } from "../button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../command";

import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import useStore from "./zustand";

const frameworks = [
  {
    value: "acre",
    label: "Acre",
  },
  {
    value: "alagoas",
    label: "Alagoas",
  },
  {
    value: "amapa",
    label: "Amapá",
  },
  {
    value: "amazonas",
    label: "Amazonas",
  },
  {
    value: "bahia",
    label: "Bahia",
  },
  {
    value: "ceara",
    label: "Ceará",
  },
  {
    value: "distrito-federal",
    label: "Distrito Federal",
  },
  {
    value: "espirito-santo",
    label: "Espírito Santo",
  },
  {
    value: "goias",
    label: "Goiás",
  },
  {
    value: "maranhao",
    label: "Maranhão",
  },
  {
    value: "mato-grosso",
    label: "Mato Grosso",
  },
  {
    value: "mato-grosso-do-sul",
    label: "Mato Grosso do Sul",
  },
  {
    value: "minas-gerais",
    label: "Minas Gerais",
  },
  {
    value: "para",
    label: "Pará",
  },
  {
    value: "paraiba",
    label: "Paraíba",
  },
  {
    value: "parana",
    label: "Paraná",
  },
  {
    value: "pernambuco",
    label: "Pernambuco",
  },
  {
    value: "piaui",
    label: "Piauí",
  },
  {
    value: "rio-de-janeiro",
    label: "Rio de Janeiro",
  },
  {
    value: "rio-grande-do-norte",
    label: "Rio Grande do Norte",
  },
  {
    value: "rio-grande-do-sul",
    label: "Rio Grande do Sul",
  },
  {
    value: "rondonia",
    label: "Rondônia",
  },
  {
    value: "roraima",
    label: "Roraima",
  },
  {
    value: "santa-catarina",
    label: "Santa Catarina",
  },
  {
    value: "sao-paulo",
    label: "São Paulo",
  },
  {
    value: "sergipe",
    label: "Sergipe",
  },
  {
    value: "tocantins",
    label: "Tocantins",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const { selected, setSelected } = useStore();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="border bg-background">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selected
            ? frameworks.find((framework) => framework.value === selected)
                ?.label
            : "Selecione um estado"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="h-[200px] w-[200px] p-0" side="">
        <Command>
          <CommandInput placeholder="Pesquise um estado" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setSelected(currentValue === selected ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cx(
                    "mr-2 h-4 w-4",
                    selected === framework.value ? "opacity-100" : "opacity-0",
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
