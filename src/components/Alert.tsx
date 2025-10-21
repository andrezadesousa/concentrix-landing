import React, { useEffect } from "react";

interface AlertProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

const Alert = ({ message, type = "success", onClose }: AlertProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // desaparece depois de 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className={`alert ${type}`}>{message}</div>;
};

export default Alert;
