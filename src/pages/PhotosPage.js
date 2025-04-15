import React, { useState, useEffect } from "react";
import "./PhotosPage.css";
import SectionWrapper from "../components/Sections/SectionWrapper";

const PhotosPage = ({ user }) => {
  const [photos, setPhotos] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  // Simula GET ao entrar na página
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // 🔗 No futuro, substituir isto por GET ao backend:
        /*
        const response = await fetch("/api/photos", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await response.json();
        setPhotos(data);
        */

        // Simulação local
        const saved = localStorage.getItem("photos");
        setPhotos(saved ? JSON.parse(saved) : []);
      } catch (err) {
        console.error("Erro ao buscar fotos:", err);
      }
    };

    fetchPhotos();
  }, []);

  const handlePhotoUpload = async (e) => {
    const files = Array.from(e.target.files);

    const newPhotos = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
      uploadedBy: user?.name || "Anónimo",
    }));

    // 🔗 No futuro, substituir isto por POST ao backend:
    /*
    const formData = new FormData();
    files.forEach((file) => formData.append("photos", file));

    await fetch("/api/photos", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      body: formData,
    });
    */

    // Simulação local
    const updatedPhotos = [...photos, ...newPhotos];
    localStorage.setItem("photos", JSON.stringify(updatedPhotos));

    // Mensagem de sucesso
    setSuccessMessage("Upload feito com sucesso!");
    setTimeout(() => setSuccessMessage(""), 2000);

    // Atualizar fotos (simula novo GET)
    setPhotos(updatedPhotos);
  };

  return (
    <SectionWrapper>
      <div className='photos-page'>
        <h1 className='photos-title'>Minhas Fotos</h1>

        <label className='upload-button'>
          Upload Fotos
          <input
            type='file'
            multiple
            accept='image/*'
            onChange={handlePhotoUpload}
            style={{ display: "none" }}
          />
        </label>

        {successMessage && (
          <div className='success-message'>{successMessage}</div>
        )}

        <div className='photos-grid'>
          {photos.map((photo, index) => (
            <div key={index} className='photo-card'>
              <img src={photo.url} alt={photo.name} className='photo-img' />
              <p className='photo-name'>{photo.name}</p>
              <p className='photo-user'>Enviado por: {photo.uploadedBy}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PhotosPage;
