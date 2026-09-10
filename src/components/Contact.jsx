import React, { useState } from "react";
import { sendContactMessage } from "../services/email";
export function Contact() {
  const [state, setState] = useState("idle");
  const [values, setValues] = useState({ subject: "", message: "" });
  async function handleSubmit(event) {
    event.preventDefault();
    if (!values.subject.trim() || !values.message.trim()) {
      setState("invalid");
      return;
    }
    setState("sending");
    try {
      await sendContactMessage(values);
      setState("success");
      setValues({ subject: "", message: "" });
    } catch {
      setState("error");
    }
  }
  const label = state === "sending" ? "Enviando..." : "Enviar";
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contato</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="subject">Assunto</label>
        <input
          id="subject"
          value={values.subject}
          onChange={(e) => setValues({ ...values, subject: e.target.value })}
        />
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          rows="5"
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
        />
        <button className="button" disabled={state === "sending"}>
          {label}
        </button>
        {state === "invalid" && (
          <p className="form-status error">Preencha assunto e mensagem.</p>
        )}
        {state === "success" && (
          <p className="form-status success">Mensagem enviada com sucesso.</p>
        )}
        {state === "error" && (
          <p className="form-status error">
            Não foi possível enviar a mensagem. Tente novamente.
          </p>
        )}
      </form>
    </section>
  );
}
