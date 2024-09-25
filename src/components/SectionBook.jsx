import React, { useState } from "react";
import CardBook from "./CardBook";
import "../styles/style-components/modal.css"

function SectionBook ({books = []}){
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) =>{
    setSelectedBook(book);
    setShowModal(true);
  }

  const closeModal = () => setShowModal(false);

    return(
    <>
      <div className="container-fluid ml-3">
        <div className="d-sm-flex align-items-center justify-content-between mt-4 mb-4">
          <h1 className="h2 mb-0 text-gray-800">Biblioteca</h1>
        </div>
      <div className="row">
            { books.map((book)=>(
                <CardBook book={book} onClick ={() => openModal(book)}/>
            ))}                       
       </div>
      </div>


      {/*Modal*/}

      {showModal && (
        <div className="custom-modal">
          <div className="modal-content">
            {/* <span className="close-button" onClick={closeModal}>
            
              &times;
            </span> */}
            <i className="close-button fas fa-times fa-fw" onClick={closeModal} ></i>
            {/* <h2>{selectedBook?.name}</h2> */}
            {/* <h2 className="h3 mb-0 text-gray-800">{selectedBook?.name}</h2>
            <img
              src={selectedBook?.image}
              alt={selectedBook?.name}
              className="img-fluid"
            />
            <div className="col-lg-6 col-md-8 col-sm-12 text-start text-lg-start">
            <p><strong>Autor:</strong> {selectedBook?.author}</p>
            <p><strong>Descripción:</strong> {selectedBook?.description}</p>
            </div> */}
      <div className="modal-body d-flex flex-column flex-lg-row justify-content-center">
      <div className="image-container col-lg-4 col-md-4 col-sm-12 text-center mb-4 mb-lg-0">
        <img
          src={selectedBook?.image}
          alt={selectedBook?.name}
          className="img-fluid modal-book-image"
        />
      </div>

      <div className="book-details col-lg-6 col-md-8 col-sm-12 text-start text-lg-start pl-0">
        <h2 className="h3 mb-10 text-gray-800">{selectedBook?.name}</h2>
        <p className="mb-0"> <strong>Autor:</strong> {selectedBook?.author}</p>
        <p><strong>Descripción:</strong> Bilardo profundiza en la carrera del famoso entrenador de fútbol Carlos Bilardo, ofreciendo anécdotas y reflexiones sobre su estilo de vida y su impacto en el deporte.</p>
      </div>
    </div>


          </div>
        </div>
      )}

    </>

    )
}
export default SectionBook;