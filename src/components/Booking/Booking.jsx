import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './Booking.css'

const Booking = () => {

    let navigate = useNavigate()

    const [btnDisabled, setBtnDisabled] = useState(true)
    const [alerter, setAlerter] = useState("")

    useEffect(()=>{
        setTimeout(() => {
            setAlerter("")
        }, 5000);
    },[alerter])

    const [data,setData]=useState({
        name: "",
        phone: "",
        date:""
    })


    const handleInputChange =({target})=>{
        setData({
            ...data, [target.name]:target.value
        })
        if(data.phone && data.date && data.name){
            setBtnDisabled(false)
        } else{
            setBtnDisabled(true)
        }
    }

    const uploadForm = (e) => {
        e.preventDefault();
        if(!data.name || !data.phone || !data.date){
            return setAlerter("Rellena todos los campos")
        }
        if(data.name.length < 3){
            return setAlerter("El nombre es demasiado corto")
        }
        if(data.phone.length !== 9){
            return setAlerter("El telefono tiene un formato incorrecto");
        }
        setAlerter("Reserva realizada con exito")
        setTimeout(() => {
            navigate("/")
        }, 5000);
        if(!localStorage.forms){
            localStorage.forms = JSON.stringify([data])
        } else{
            let tmp = JSON.parse(localStorage.forms)
            tmp.push(data)
            localStorage.forms = JSON.stringify(tmp)
        }
    }

  return (
    <section className="Booking">
        <form onSubmit={uploadForm}>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" placeholder="Tu nombre" onChange={handleInputChange}/>
            <label htmlFor="phone">Telefono</label>
            <input type="tel" name="phone" id="phone" placeholder="678912345" onChange={handleInputChange}/>
            <label htmlFor="date">Fecha</label>
            <input type="date" name="date" id="date" min={new Date().toISOString().split("T")[0]} onChange={handleInputChange}/>
            <button type="submit" disabled={btnDisabled} >Enviar</button>
        </form>
        {(alerter === "")?null:<p className="alerter">{alerter}</p>}
    </section>
  )
}

export default Booking