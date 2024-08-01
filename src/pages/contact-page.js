import React from "react";
import { useState } from "react";

function ContactPage (){
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

        try {
          const response = await fetch('http://localhost:8080/create-book', {
            method: 'POST',
            body: data,
          });
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

    return (
        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column ">
         <div id="content">
            <div className="container-contact">

        <div className="contain-title col-12 col-sm-8 col-md-9 col-lg-10 mx-auto ">
            <h2 className="h2 mt-2 mb-0">Contactanos</h2>
            <h4 className="h6 mt-2 mb-0">¡Nuestros asistentes están preparados para ayudarte!</h4>           
        </div>
        <div className="cont-form-contact-page d-flex justify-content-center align-items-center">
        <form className=" form-contact-page pl-0 mt-4 col-12 col-sm-8 col-md-9 col-lg-10 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
            <label for="formInput1" class="form-label">Nombre</label>
            <input type="text" className="form-control" name="name" id="inputName" placeholder="Nombre" aria-describedby="nameHelp" value={formData.name}  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label for="formInput2" class="form-label">E-mail </label>
            <input type="email" className="form-control" name="email" id="inputEmail" placeholder="E-mail" aria-describedby="emailHelp" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label for="formTextarea1" class="form-label">Comentario/Duda</label>
            <textarea type="text" className="form-control" id="textareaComent" name="message" value={formData.message} style={{ height: '120px' }} onChange={handleChange} placeholder="Escribi aca..."></textarea>
        </div>
        <button type="submit" className="btn btn-contact" style={{color:'#ffff!important'}}>Enviar</button>
        </form>
        </div>
        </div>
    </div>
                
          </div>
      </div>
      
  );
}

export default ContactPage;





       



// {/* <div class="form-row">
// <div class="form-group col-md-6">
//   <label for="inputCity">City</label>
//   <input type="text" class="form-control" id="inputCity">
// </div>
// <div class="form-group col-md-4">
//   <label for="inputState">State</label>
//   <select id="inputState" class="form-control">
//     <option selected>Choose...</option>
//     <option>...</option>
//   </select>
// </div>
// <div class="form-group col-md-2">
//   <label for="inputZip">Zip</label>
//   <input type="text" class="form-control" id="inputZip">
// </div>
// </div> */}