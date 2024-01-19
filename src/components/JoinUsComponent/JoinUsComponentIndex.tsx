'use client'
import React, { useState, useEffect } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { FaPaperclip } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { FaExclamation } from "react-icons/fa";
import { emailBU } from "./axios.config";
const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    cv: null,
  });
  const [showFileName, setShowFileName] = useState(true);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files?.[0],
    });
    setShowFileName(true);
  };

  const downloadFile = () => {
    if (formData.cv) {
      const { name, type } = formData.cv;

      const fileURL = URL.createObjectURL(formData.cv);

      const a = document.createElement("a");
      a.style.display = "none";
      document.body.appendChild(a);

      a.href = fileURL;
      a.download = name || "archivo_descargado";

      a.click();

      document.body.removeChild(a);
      URL.revokeObjectURL(fileURL);
    }
  };

  const handleFileRemove = () => {
    setFormData({
      ...formData,
      cv: null,
    });
    setShowFileName(false);
  };
  const truncateFileName = (fileName: string, maxLength: number) => {
    if (fileName.length <= maxLength) {
      return fileName;
    } else {
      return fileName.substring(0, maxLength) + "...";
    }
  };
  const validateForm = () => {
    if (formData.name.trim() === "") {
      return false;
    }

    if (formData.lastName.trim() === "") {
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      formData.email.trim() === "" ||
      !emailRegex.test(formData.email.trim())
    ) {
      return false;
    }

    const phoneRegex =
      /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

    if (
      formData.phone.trim() === "" ||
      !phoneRegex.test(formData.phone.trim())
    ) {
      return false;
    }

    if (formData.message.trim() === "" && formData.cv === null) {
      return false;
    }

    return true;
  };
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid((prevIsFormValid) => {
      const newIsFormValid = validateForm();
      return newIsFormValid;
    });
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      console.log("Error en la validación del formulario");
      return;
    }
    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("message", formData.message);
      if (formData.cv !== null) {
        formDataToSend.append("file", formData.cv);
      }
  
      const response = await emailBU.post("/api/email/send", formDataToSend);

      if (response.data.ok) {
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          cv: null,
        });

        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        setIsErrored(true);
        setTimeout(() => {
          setIsErrored(false);
        }, 5000);

        console.log("Error en la solicitud:", response.statusText);
      }
    } catch (error) {
      setIsErrored(true);
      setTimeout(() => {
        setIsErrored(false);
      }, 5000);
      console.log("Error al enviar la solicitud:", error);
    }
    setIsLoading(false);
  };

  const boxShadowStyle =
  "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";


  return (
    <div className='w-full mockup-padding my-8'>
            <p className="text-center py-8 text-6xl text-white-body"       >Unite al Equipo</p>

      <div className='bg-white rounded-3xl p-4 w-full padding-mockup-mobile' style={{boxShadow: boxShadowStyle}}>
                  <form onSubmit={handleSubmit} className='w-full'>
              <div className="flex flex-row">
                <div className="w-full m-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="w-full rounded-md p-2 input-join"
                    style={{color: '#73aed9', backgroundColor: 'transparent'}}
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full m-2">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Apellido"
                    className="w-full rounded-md p-2 input-join"
                    required
                    style={{color: '#73aed9'}}
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-full m-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-md p-2 input-join"
                    required
                    style={{color: '#73aed9'}}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full m-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    className="w-full rounded-md p-2 input-join"
                    required
                    style={{color: '#73aed9'}}
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-row m-2">
                <div className="w-full">
                  <textarea
                    name="message"
                    placeholder="Mensaje"
                    className="w-full rounded-md p-2 input-join msg-heigth"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{color: '#73aed9'}}
                  ></textarea>
                  <div
                    className="submite-btn file-container mt-4"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div
                      className="file-container"
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <input
                        type="file"
                        id="inputarchivo"
                        name="cv"
                        accept=".pdf"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />
                      <button
                        type="button"
                        className="btn-mobile-file"
                        style={{ backgroundColor: "#fe9c00", color: "white" }}
                        onClick={() =>
                          typeof window !== "undefined" &&
                          document.getElementById("inputarchivo").click()
                        }
                      >
                        <FaPaperclip style={{ transform: "rotate(180deg)" }} />
                        Selecciona un archivo
                      </button>
                      {formData.cv && showFileName && (
                        <div
                          style={{
                            marginLeft: "10px",
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                          className="file-join text-sky"
                        >
                          <span onClick={downloadFile}>
                            {truncateFileName(formData.cv.name, 25)}
                          </span>

                          <TiDeleteOutline
                            style={{
                              height: "30px",
                              width: "30px",
                              color: "#fe9c00",
                              borderRadius: "25px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: "15px",
                              cursor: "pointer",
                            }}
                            onClick={handleFileRemove}
                          />
                        </div>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className="btn-mobile-file btn-send-join"
                    >
                      {isLoading && <div className="loader"></div>}
                      {isSuccess && <AiFillLike className="success-icon" />}
                      {isErrored && <FaExclamation className="error-icon" />}
                      {!isLoading && !isSuccess && !isErrored && "Enviar"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
    </div></div>
  );
}

export default JoinUs;