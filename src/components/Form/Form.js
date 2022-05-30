import {useState} from "react";
import axios from "axios";

function PostForm() {
    const [userInput, setUserInput] = useState({nombre: "", email: "", phone: "", mensaje: ""})
    const [showAlert, setShowAlert] = useState(false)

    const handleChange = function (event) {
      setShowAlert(false)
      const property = event.target.name
      const value = event.target.value

      setUserInput({...userInput, [property]: value})
    }

    const handleSubmit = function (event){
      event.preventDefault()
      axios({
        url: 'http://127.0.0.1:8000/api/contacto',
        method: 'POST',
        data: userInput
      }).then( result => {
        console.log(result)
        setShowAlert(true)
        setUserInput({nombre: "", email: "", phone: "", mensaje: ""})
      })
      .catch( error => console.log(error))
    }

    return (
        <form onSubmit={handleSubmit} method="POST">
        <div>
          <input
            onChange={handleChange}
            required
            placeholder="Name"
            name="nombre"
            type="text"
            className="form-control"
            value={userInput.nombre}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            required
            name="email"
            placeholder="Email"
            type="email"
            className="form-control"
            value={userInput.email}
          />
          <div className="invalid-feedback">Ingrese un email válido</div>
        </div>
        <div>
          <input
            onChange={handleChange}
            required
            name="phone"
            placeholder="Phone"
            type="tel"
            className="form-control"
            value={userInput.phone}
          />
        </div>
        <div>
          <textarea
            onChange={handleChange}
            required
            name="mensaje"
            rows="3"
            placeholder="Message"
            id="formBasicTextArea"
            className="form-control"
            value={userInput.mensaje}
          ></textarea>
          <div className="invalid-feedback">Por favor ingrese un mensaje</div>
        </div>
        <button type="submit">Send</button>
        {showAlert && <div className="alert alert-success">El mensaje fue enviado correctamente.✅</div>}
      </form>
    );
}

export default PostForm;