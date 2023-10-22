import React from "react";

export default function Vieimg({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <img
        src="./logo/teste.jpg"
        style={{ width: "100%", height: "15%" }}
        className="rounded-lg border object-cover "
      />
    </div>
  );
}
