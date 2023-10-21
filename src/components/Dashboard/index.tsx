import React from "react";
import CardHome from "../Card";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mx-auto max-w-7xl flex-1 justify-center px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <CardHome />
          <CardHome />
          <CardHome />
        </div>
      </div>
    </div>
  );
}
