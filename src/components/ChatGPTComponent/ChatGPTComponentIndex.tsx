"use client";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const ChatGPTComponent = () => {
  const [input, setInput] = useState({ message: "" });
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const boxShadowStyle = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = "auto";

    const newHeight = Math.min(200, textarea.scrollHeight);
    textarea.style.height = `${newHeight}px`;

    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSendClick = async () => {
    if (!input.message) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setAnswer(
        "Este en una respuesta autogenerada de prueba para saber como queda la animación y el despliegue de la data, no hay conexión con ChatGPT"
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full" style={{ padding: "3vw" }}>
      <p className="text-center py-8 text-6xl text-white-body">
        ¿Tenés alguna otra pregunta?
        <br />
        Hacésela a nuestra Inteligencia Artificial
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-pros"
        style={{ borderRadius: "25px", boxShadow: boxShadowStyle }}
      >
        <div
          className="w-full flex flex-col ml-4 "
          style={{ padding: ".5rem" }}
        >
          <label
            htmlFor="message"
            className="font-bold text-4xl text-white-body py-4"
            style={{ color: "white" }}
          >
            Tu pregunta aquí
          </label>
          <textarea
            name="message"
            id="message"
            rows={1}
            placeholder="Escribe tu pregunta..."
            value={input.message}
            onChange={handleChange}
            style={{
              minHeight: "200px",
              maxHeight: "200px",
              overflowY: "auto",
              resize: "none",
              backgroundColor: "transparent", // Fondo transparente
              color: "white", // Texto en blanco
            }}
            required
          ></textarea>
          <button
            onClick={handleSendClick}
            style={{
              marginTop: "1vw",
              padding: "1vw",
              width: "calc(33.33% - 2vw)", // Ancho del 33.33% del ancho del viewport
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            disabled={loading || input.message.length === 0}
            className="mb-4 btn-cta  transition-transform transform hover:scale-105 text-white p-2 mb-2 btn-bg-color "
          >
            Send
          </button>
        </div>
        <div className="w-full " style={{ padding: ".5rem" }}>
          <p
            className="font-bold text-4xl text-white-body py-4"
            style={{ color: "white" }}
          >
            Respuesta
          </p>
          {loading ? (
            <div
              className="w-full h-full flex justify-center items-center"
              style={{ maxHeight: "250px", overflowY: "auto", resize: "none" }}
            >
              <div className="loader"></div>
            </div>
          ) : (
            <div style={{ height: "250px", overflowY: "auto", resize: "none" }}>
              <TypeAnimation sequence={[answer]} speed={75} repeat={0} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatGPTComponent;
