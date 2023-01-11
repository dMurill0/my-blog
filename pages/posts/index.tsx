import React, { useState } from "react";

type Props = {};

function Index({}: Props) {
  const [fecha, setFecha] = useState("");

  function submit() {
    const date = new Date();
    console.log(date.toLocaleDateString());
    setFecha(date.toLocaleDateString());
  }
  

  return (
    <div className="min-h-screen w-min-screen h-full w-full bg-slate-400">
      <form
        className="flex flex-col w-1/3 h-fit space-y-12 p-10 mx-auto"
        action=""
        method="post"
      >
        <h1>Post:</h1>
        <h2>{fecha}</h2>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <textarea name="content" id=""></textarea>
        <button className="px-4 py-2 bg-slate-600 rounded-full w-1/6 mx-auto text-white" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Index;
