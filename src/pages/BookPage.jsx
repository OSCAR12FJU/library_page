import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/book-page.css";
import { getBookPage } from "../api/api";
import "../styles/dashboard.css"

const BookPage = ()=> {
  const { bookName } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getBookPage(bookName)
        setBook(data);

      } catch (error) {
        setError(error.message);
      }
    };

    fetchDetails();
  }, [bookName]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!book) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className="cont-form-new-book d-flex justify-content-center align-items-center">
        <div className="container product-container mt-3">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-md-4 col-sm-12 text-center mb-4 mb-lg-0">
              <img
                src={book.image}
                alt={book.name}
                className="img-fluid product-image"
                style={{ borderRadius: "5px" }}
              />
            </div>

            <div className="col-lg-6 col-md-8 col-sm-12 text-start text-lg-start">
              <h2 className="h2 title-book">{book.name}</h2>
              <p className="mb-3">{book.author}</p>

              <div className="product-details">
                <p className="mb-0">
                  <strong>Páginas: </strong>
                  {book.pages}
                </p>
                <p className="mb-3">
                  <strong>Publicado: </strong>
                  {book.published}
                </p>
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
  );
}

export default BookPage;

