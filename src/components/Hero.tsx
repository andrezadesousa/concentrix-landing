import { useState } from "react";
import Alert from "./Alert";

const Hero = () => {
  const [perfil, setPerfil] = useState("PF");
  const [documento, setDocumento] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handlePF = () => setPerfil("PF");
  const handlePJ = () => setPerfil("PJ");

  const formatCPF = (value: string) => {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return value;
  };

  const formatCNPJ = (value: string) => {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
    value = value.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
    return value;
  };

  const formatNascimento = (value: string) => {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1/$2");
    value = value.replace(/(\d{2})(\d)/, "$1/$2");
    return value;
  };

  const handleDocumentoChange = (e: any) => {
    let value = e.target.value;
    if (perfil === "PF") value = formatCPF(value);
    else value = formatCNPJ(value);
    setDocumento(value);
  };

  const handleNascimentoChange = (e: any) => {
    setNascimento(formatNascimento(e.target.value));
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    const documentoValido =
      (perfil === "PF" && documento.length === 14) ||
      (perfil === "PJ" && documento.length === 18);
    const nascimentoValido = nascimento.length === 10;

    if (!documentoValido || !nascimentoValido) {
      setError(
        "Por favor, preencha corretamente todos os campos antes de entrar."
      );
      return;
    }

    setError("");
    setSuccess(true);

    setTimeout(() => {
      window.location.href = "https://andreza-sousa.web.app/";
    }, 2000); // redireciona depois de 2s
  };

  const isDisabled =
    (perfil === "PF" && documento.length < 14) ||
    (perfil === "PJ" && documento.length < 18) ||
    nascimento.length < 10;

  return (
    <section className="hero grid" id="hero">
      {success && (
        <Alert
          message="Login realizado com sucesso! Redirecionando..."
          type="success"
          onClose={() => setSuccess(false)}
        />
      )}
      <div className="hero__container">
        <div className="hero__titles">
          <h1 className="hero__title">Tenha aqui </h1>
          <h2 className="hero__title">a melhor </h2>
          <h3 className="hero__title">experiência.</h3>
        </div>
        <form className="hero__form" onSubmit={handleLogin}>
          <h1 className="hero__form-title">Tipo de perfil</h1>
          <div className="hero__form-buttons">
            <button
              type="button"
              className={
                perfil === "PF"
                  ? "hero__form-button-default"
                  : "hero__form-button"
              }
              onClick={handlePF}
            >
              Pessoa Física
            </button>
            <button
              type="button"
              className={
                perfil === "PJ"
                  ? "hero__form-button-default"
                  : "hero__form-button"
              }
              onClick={handlePJ}
            >
              Pessoa Jurídica
            </button>
          </div>

          <div className="hero__form-inputs">
            <h1 className="hero__form-title">
              {perfil === "PF" ? "CPF" : "CNPJ"}
            </h1>
            <input
              className="hero__form-input"
              placeholder={
                perfil === "PF" ? "000.000.000-00" : "00.000.000/0000-00"
              }
              value={documento}
              onChange={handleDocumentoChange}
              maxLength={perfil === "PF" ? 14 : 18}
            />
          </div>

          <div className="hero__form-inputs">
            <h1 className="hero__form-title">Data de nascimento</h1>
            <input
              className="hero__form-input"
              placeholder="00/00/0000"
              value={nascimento}
              onChange={handleNascimentoChange}
              maxLength={10}
            />
          </div>

          {error && <p className="hero__form-error">{error}</p>}

          <button
            type="submit"
            className="hero__button-enter"
            disabled={isDisabled}
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
