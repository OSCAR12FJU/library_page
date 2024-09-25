export const getDataBooks = async() =>{
    try {
        const response = await fetch('http://localhost:8080/get-books');
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error al solicitar la información', error);
    }
};

export const getBookPage = async(bookName) =>{
  try {
    const response = await fetch(`http://localhost:8080/books/${bookName}`);
    if (!response.ok) {
      throw new Error("Libro no encontrado");
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error al solicitar la información', error);
  }
};

export const handleLogout = async () => {
    try{
        const response = await fetch('http://localhost:8080/logout');
        const data = await response.json();
        return data 
    }catch(error){
        console.error('Error al realizar la consulta', error)
    }
};

export const createBook = async (data) => {
    try {
        const response = await fetch('http://localhost:8080/create-book', {
          method: 'POST',
          body: data,
        });
        if (response.ok) {
          console.log('Información enviada correctamente');
          return
        } else {
          console.error('Problema en el envio de información');
          return
        }
      } catch (error) {
        console.error('Error:', error);
      }
};

export const createContact = async (formData) => {
    try {
    const response = await fetch('http://localhost:8081/create-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      console.log('Información enviada correctamente');
    } else {
      console.error('Problema en el envio de información');
    }
    } catch(error) {
    console.error('Error:', error);
  }
};