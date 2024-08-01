import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "../styles/book-page.css"
    
function ProductPage(){
    const {bookName} = useParams();
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() =>{ 
        const fetchDetails = async () =>{
            try{
                const response = await fetch(`http://localhost:8080/books/${bookName}`);
                console.log(response)

                if (!response.ok){
                    throw new Error('Libro no encontrado');
                }
                const data = await response.json();
                setBook(data);
            }catch(error){
                setError(error.message);
            }
        };
        fetchDetails();
    }, [bookName]);
    if(error){
        return <div>Error: {error}</div>
    }
    if(!book){
        return <div>Cargando...</div>
    }

<div className="contain-title col-12 col-sm-7 col-md-5 col-lg-4 mx-auto ">
                    <h2 className="h3 mt-2 mb-0">Contactanos</h2>
                    <h4 className="h6 mt-2 mb-0">¡Nuestros asistentes están preparados para ayudarte!</h4>           
                </div>
    return(
        <>
                <div className="cont-form-new-book d-flex justify-content-center align-items-center">
                <div className="container product-container mt-3">
              <div className="row justify-content-center align-items-center">
                  <div className="col-lg-4 col-md-4 col-sm-12 text-center mb-4 mb-lg-0">
                      <img src={book.image} alt={book.name} className="img-fluid product-image"style={{borderRadius: '5px'}} />
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 text-start text-lg-start">
                      <h2 className="h2 title-book">{book.name}</h2>
                      <p className="mb-3">{book.author}</p>

                      <br className="d-none d-md-block" />
                      

                      <div className="product-details">
                          <p className="mb-0"><strong>Páginas: </strong>{book.pages}</p>
                          <p className="mb-3"><strong>Publicado: </strong>{book.published}</p>
                      </div>
                      <div className="product-description">
                          <h2 className="h4 descr-book">Descripción</h2>
                          <p>{book.description}</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </>
    )

}

export default ProductPage;