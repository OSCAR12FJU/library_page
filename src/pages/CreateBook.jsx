import React, { useRef } from "react";
// import "../styles/book-page.css"
import { useState } from "react";
import InputField from "../components/InputField";
import { createBook } from "../api/api";
import "../styles/style-page-login/register.css"


const CreateBook = () =>{
    const [formData, setFormData] = useState({
      name: '',
      author: '',
      description: '',
      pages:'',
      published:'',
      image:null,
    });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        

        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
 
      };
  
      const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('author', formData.author);
        data.append('description', formData.description);
        data.append('pages', formData.pages);
        data.append('published', formData.published);
        if(formData.image){
            data.append('image', formData.image);
        }
        console.log([...data]);

        try{
          const response = await createBook(data);
            if (response.ok) {
            console.log('Información enviada correctamente');}

          setFormData({
            name: '',
            author: '',
            description: '',
            pages:'',
            published:'',
            image:null
          });

          console.log("Formulario enviado y reseteado")

        }catch(error){
          console.error('Error al cargar los datos', error);
          }
        };

  
        const handleFileChange = (e) => {
           setFormData((prevData) =>({
            ...prevData,
            image: e.target.files[0]
           }));
        };

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    }; 
    
    return (
        <div className="mt-4 ">
          <div className="contain-title col-12 col-sm-7 col-md-10 col-lg-11 mx-auto pl-0">
            <h2 className="h2 mt-2 mb-0">Agregar nuevo libro</h2>
            <h4 className="h6 mt-2 mb-0">Llena cada campo requerido para poder agregar el libro.</h4>
          </div>
          <div className="cont-form-new-book d-flex justify-content-center align-items-center">
          <form
      className="form-new-book mt-4 g-3 needs-validation col-12 col-sm-7 col-md-10 col-lg-11 pl-0 mx-auto"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      noValidate
    >
      <InputField
        label="Titulo"
        type="text"
        id="validationCustom01"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required={true}
        feedback="Looks good!"
      />
      <InputField
        label="Autor"
        type="text"
        id="validationCustom02"
        name="author"
        value={formData.author}
        onChange={handleChange}
        required={true}
        feedback="Looks good!"
      />
      <div className="col-md-12 col-lg-10 mb-3 pl-0">
        <label htmlFor="validationCustom05" className="form-label">Descripción</label>
        <textarea
          className="form-control"
          style={{ height: '150px' }}
          id="validationCustom05"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <div className="invalid-feedback">Please provide a valid description.</div>
      </div>
      <div className="form-row">
        <InputField
          label="Páginas"
          type="number"
          id="validationCustom03"
          name="pages"
          value={formData.pages}
          onChange={handleChange}
          required={true}
          feedback="Please provide a valid number of pages."
        />
        <InputField
          label="Publicación"
          type="date"
          id="validationCustom04"
          name="published"
          value={formData.published}
          onChange={handleChange}
          required={true}
          feedback="Looks good!"
        />
        <div className="contain-submit-book col-md-4 col-lg-3 mb-3">
          <div className="form-group">
            <input
              type="file"
              className="d-none"
              id="fileInput"
              accept="image/png, image/jpeg"
              name="image"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <button
              type="button"
              className="btn btn-new"
              onClick={handleButtonClick}>
              <i className="fas fa-regular fa-image mr-2"></i>Imagen de Portada
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 mb-3 pl-0">
        <button className="btn btn-register" type="submit">Cargar Libro</button>
      </div>
    </form>
  </div>
  </div>
  );
}

export default CreateBook;