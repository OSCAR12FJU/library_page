import React from "react";

const CardBook = ({book, onClick}) =>{
    return(
    <>
     <div className="col-lg-3 col-sm-4 col-md-6 mb-4"  key={book.book_id}>
       <div classname="card wd-18 px-0 "style={{cursor:'pointer'}} onClick={onClick}>
           <div style={{height:'300px', overflow: 'hidden'}}>
               <img src={book.image} className="card-img-top img-fluid" style={{objectFit:'contain', width:'100%', height:'100%'}} alt={book.name}  />
           </div>
            <div className="card-body" >
              <h3 className="h5 mt-2 mb-0">{book.name}</h3>
              <h4 className="h6 mt-2 mb-0">{book.author}</h4>   
            </div>
       </div>
     </div>
    </>
    )
}
export default CardBook;