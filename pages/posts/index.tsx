import React, { SyntheticEvent, useState } from "react";

type Props = {};

function Index({}: Props) {
  const [fecha, setFecha] = useState("");

  function submit(e: SyntheticEvent) {
    e.preventDefault();
    const date = new Date();
    setFecha(date.toLocaleDateString());
    const formData = {
      title: e.target.title.value,
      content: e.target.content.value,
    };
    console.log(formData);
  }

  return (
    <div className="min-h-screen w-min-screen h-full w-full bg-slate-400">
      <form
        className="flex flex-col w-1/3 h-fit space-y-12 p-10 mx-auto"
        action=""
        method="post"
        onSubmit={submit}
      >
        <h1>Post:</h1>
        <h2>{fecha}</h2>
        <h1>Título</h1>
        <input type="text" name="title" id="" />
        {/* <input type="text" name="" id="" /> */}
        <h1>Texto</h1>
        <textarea name="content" id="" />
        <input
          className="px-4 py-2 bg-slate-600 rounded-full w-1/6 mx-auto text-white"
          type="submit"
          value="Enviar"
        />
      </form>
    </div>
  );
}

export default Index;
