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

  const isValidCPF = (cpf: string) => {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cpf[i]) * (10 - i);
    let check1 = (sum * 10) % 11;
    if (check1 === 10) check1 = 0;
    if (check1 !== parseInt(cpf[9])) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cpf[i]) * (11 - i);
    let check2 = (sum * 10) % 11;
    if (check2 === 10) check2 = 0;
    return check2 === parseInt(cpf[10]);
  };

  const isValidCNPJ = (cnpj: string) => {
    cnpj = cnpj.replace(/\D/g, "");
    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

    let length = cnpj.length - 2;
    let numbers = cnpj.substring(0, length);
    let digits = cnpj.substring(length);
    let sum = 0;
    let pos = length - 7;

    for (let i = length; i >= 1; i--) {
      sum += parseInt(numbers[length - i]) * pos--;
      if (pos < 2) pos = 9;
    }

    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits[0])) return false;

    length = length + 1;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;

    for (let i = length; i >= 1; i--) {
      sum += parseInt(numbers[length - i]) * pos--;
      if (pos < 2) pos = 9;
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    return result === parseInt(digits[1]);
  };

  const isDateValid = (date: string) => {
    const [day, month, year] = date.split("/").map(Number);
    const dt = new Date(year, month - 1, day);

    if (
      dt.getFullYear() !== year ||
      dt.getMonth() + 1 !== month ||
      dt.getDate() !== day
    )
      return false;

    return true;
  };

  const isAdult = (date: string) => {
    const [day, month, year] = date.split("/").map(Number);
    const today = new Date();
    const age =
      today.getFullYear() -
      year -
      (today.getMonth() + 1 < month ||
      (today.getMonth() + 1 === month && today.getDate() < day)
        ? 1
        : 0);
    return age >= 18;
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    // Validação CPF/CNPJ
    if (perfil === "PF" && !isValidCPF(documento)) {
      setError("CPF inválido. Por favor, insira um CPF válido.");
      return;
    }
    if (perfil === "PJ" && !isValidCNPJ(documento)) {
      setError("CNPJ inválido. Por favor, insira um CNPJ válido.");
      return;
    }

    if (!isDateValid(nascimento)) {
      setError("Data de nascimento inválida!");
      return;
    }

    if (!isAdult(nascimento)) {
      setError("É necessário ter pelo menos 18 anos!");
      return;
    }

    setError("");
    setSuccess(true);

    setTimeout(() => {
      window.location.href = "https://andreza-sousa.web.app/";
    }, 2000);
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
