import React from "react";
import CardHome from "../Card";

export default function Dashboard({ children, searchInput }: { children: React.ReactNode , searchInput?: React.ReactNode}) {
  return (
    <div className="pt-14">
      <div className="mx-auto max-w-7xl flex-1 justify-center px-4 sm:px-6">
        <h1 className="mb-6 text-4xl font-semibold">Eventos</h1>
        <div className="max-w-4xl mb-10">{searchInput}</div>
        <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </div>
  );
}
