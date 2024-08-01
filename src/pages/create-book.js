import React, { useRef } from "react";
// import NavBar from "../components/nav-bar";
import "../styles/book-page.css"
import { useState } from "react";


function CreateBook (){
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

        try {
          const response = await fetch('http://localhost:8080/create-book', {
            method: 'POST',
            body: data,
          });
          if(!response.ok){
            const errorText = await response.text();
            console.log('Problema en el envio de información:', errorText)
          }
          if (response.ok) {
            console.log('Información enviada correctamente');
          } else {
            console.error('Problema en el envio de información');
            console.log(response)
          }
        } catch (error) {
          console.error('Error:', error);
        }
        console.log(formData)
        setFormData({
          name: '',
          author: '',
          description: '',
          pages:'',
          published:'',
          image:null
        })
        

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
      <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
              <div id="content" className="mt-4">
                  <div className="contain-title col-12 col-sm-7 col-md-9 col-lg-10 mx-auto pl-0">
                      <h2 className="h2 mt-2 mb-0">Agregar nuevo libro</h2>
                      <h4 className="h6 mt-2 mb-0">Llena cada campo requerido para poder agregar el libro.</h4>
                  </div>
                  <div className="cont-form-new-book d-flex justify-content-center align-items-center">
                      <form
                          className="form-new-book mt-4 g-3 needs-validation col-12 col-sm-7 col-md-9 col-lg-10 pl-0 mx-auto"
                          onSubmit={handleSubmit}
                          enctype="multipart/form-data"
                          noValidate
                      >
                          <div className="col-md-12 col-lg-10 mb-3 pl-0">
                              <label htmlFor="validationCustom01" className="form-label">Titulo</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="validationCustom01"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                              />
                              <div className="valid-feedback">Looks good!</div>
                          </div>
                          <div className="col-md-12 col-lg-10 mb-3 pl-0">
                              <label htmlFor="validationCustom02" className="form-label">Autor</label>
                              
                              <input
                                  type="text"
                                  className="form-control"
                                  id="validationCustom02"
                                  name="author"
                                  value={formData.author}
                                  onChange={handleChange}
                                  required
                              />
                              <div className="valid-feedback">Looks good!</div>
                              <p className="mt-2 mb-0" style={{fontSize:'15px', fontWeight:'400'}}>Si el libro tiene más de un autor escribir los nombre con una coma. (Por ejemplo: Oscar Flores, Yair Mallorca)</p>
                          </div>
                          <div className="col-md-12 col-lg-10 mb-3 pl-0">
                              <label htmlFor="validationCustom05" className="form-label">Descripción</label>
                              <textarea
                                  type="text"
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

                          <div className="col-md-3 col-lg-3 mb-3 mr-3">
                              <label htmlFor="validationCustom03" className="form-label">Páginas</label>
                              <input
                                  type="number"
                                  className="form-control"
                                  id="validationCustom03"
                                  name="pages"
                                  value={formData.pages}
                                  onChange={handleChange}
                                  required
                              />
                              <div className="invalid-feedback">Please provide a valid number of pages.</div>
                          </div>
                          <div className="col-md-3 col-lg-3 mb-3 mr-3">
                              <label htmlFor="validationCustom04" className="form-label">Publicación</label>
                              <input
                                  type="date"
                                  className="form-control"
                                  id="validationCustom04"
                                  name="published"
                                  value={formData.published}
                                  onChange={handleChange}
                                  required
                              />
                              <div className="valid-feedback">Looks good!</div>
                          </div>
                    
                          <div className="contain-submit-book col-md-4 col-lg-3 mb-3">
                              <div className="form-group">
                              <label htmlFor="validationCustom04" className="form-label" style={{color:'transparent'}}>Publicación</label>
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
                                      className="btn btn-new "
                                      onClick={handleButtonClick}>
                                    <i class="fas fa-regular fa-image mr-2"></i>Imagen de Portada
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
              </div>
      </div>
  );
}

export default CreateBook;