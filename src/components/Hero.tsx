import { useState } from "react";

const Hero = () => {
  const [perfil, setPerfil] = useState("PF"); // "PF" ou "PJ"
  const [documento, setDocumento] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [error, setError] = useState(""); // aviso para o usuário

  const handlePF = () => {
    setPerfil("PF");
    setDocumento("");
    setError("");
  };

  const handlePJ = () => {
    setPerfil("PJ");
    setDocumento("");
    setError("");
  };

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
    if (perfil === "PF") {
      value = formatCPF(value);
    } else {
      value = formatCNPJ(value);
    }
    setDocumento(value);
  };

  const handleNascimentoChange = (e: any) => {
    setNascimento(formatNascimento(e.target.value));
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    // validação completa
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

    alert(
      `Bem-vindo(a)! Perfil: ${
        perfil === "PF" ? "Pessoa Física" : "Pessoa Jurídica"
      }`
    );

    // resetar campos e limpar erro
    setDocumento("");
    setNascimento("");
    setError("");
  };

  // desabilita botão se os campos não estiverem completos
  const isDisabled =
    (perfil === "PF" && documento.length < 14) ||
    (perfil === "PJ" && documento.length < 18) ||
    nascimento.length < 10;

  return (
    <section className="hero grid" id="hero">
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
              id="btnPF"
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
              id="btnPJ"
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
            className={`hero__button-enter ${
              perfil === "PJ" ? "hero__form-button-default" : ""
            }`}
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
