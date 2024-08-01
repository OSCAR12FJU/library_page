import { useState, useEffect} from "react";
import React from "react";
import { Link } from "react-router-dom";

function TemplateCards ({books = []}){
    // const [books, setBooks] = useState([]);
    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('http://localhost:8080/get-books');
    //         const data = await response.json();
    //         setBooks(data);
    //     } catch (error) {
    //         console.error('Error al solicitar la información', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, [])
    return(
        <>
        <div className="container-fluid ml-3">

            <div className="d-sm-flex align-items-center justify-content-between mt-4 mb-4">
                <h1 className="h3 mb-0 text-gray-800">Biblioteca</h1>
            </div>

            <div className="row">
                
          { books.map((book)=>(

                //  key={book.book_id},
                //  name={book.name},
                //  author={book.author} ,
                //  image={book.image} 

        <div className="col-lg-3 col-sm-4 col-md-6 mb-4"  key={book.book_id}>
            <div classname="card wd-18 px-0 "style={{cursor:'pointer'}}>
                <Link to={`/libros/${book.name}`} style={{textDecoration:'none', color: 'inherit'}} >
                <div style={{height:'300px', overflow: 'hidden'}}>
                     <img src={book.image} className="card-img-top img-fluid" style={{objectFit:'contain', width:'100%', height:'100%'}} alt={book.name}  />
                </div>
                    <div className="card-body" >
                        <h3 className="h5 mt-2 mb-0">{book.name}</h3>
                        <h4 className="h6 mt-2 mb-0">{book.author}</h4>   
                    </div>
                </Link>
             </div>
        </div>
        ) )}                       
            </div>
        </div>
        </>

    )
}
export default TemplateCards;


// const CardBooks = ({ name,author, image } = TemplateCards) =>{
//     return(
//         <div className="col-xl-3 col-sm-4 col-md-6 mb-4" >
//             <div classname="card wd-18 "style={{cursor:'pointer'}}>
//                 <Link to={`/books/${name}`} style={{textDecoration:'none', color: 'none'}} >
//                     <img src={image} class="card-img-top" alt={name}  />
//                     <div className="card-body" >
//                         <h3 className="h5 mt-2 mb-0">{name}</h3>
//                         <h4 className="h6 mt-2 mb-0">{author}</h4>   
//                     </div>
//                     </Link>
//              </div>
//         </div>
        
//     )
// }
