import { useState } from 'react'
import './style.scss'
import axios from 'axios'
import Loader from '../Loader'

const Form = () => {

    const eventId = '631ce2476b715286d3660fae'
    const countries = [ "Argentina", "Brasil", "Uruguay", "Paraguay", "Bolivia", "Peru", "Venezuela", "Colombia", "Mexico"]
    const [attendees, setAttendees] = useState({})
    const [waiting, setWaiting] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)
    
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setAttendees({...attendees, [name]:value})
    }
    
    const handleSubmit = (e) => {        
        e.preventDefault()
        const event = {
            attendees
        }
        updateEvent(event)
    }

    const updateEvent = async (event) =>{
        try {
            setWaiting(!waiting)
            const response = await axios.put(`https://t8agency.herokuapp.com/events/${eventId}`,event)
            if (response.status === 200 ) {
                setTimeout(() => {
                    setWaiting(!waiting)
                    setFormSubmitted(true)
                }, 3000);
            }
        } catch (error) {
            const {data, status} = error.response
            console.log(data, status)
            setFormSubmitted(false)
        }
    }

    return (
        <form  onSubmit={handleSubmit}>
            <div className='form-title'>
                ¡Inscríbete y reserva tu lugar ahora!
            </div>
            <div className='form-inputs'>
                <div className='form-group'>
                    <label htmlFor="name"> nombre </label>
                    <input type="text" name="name" id="name" minLength={3} required onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="surname"> apellido </label>
                    <input type="text" name="surname" id="surname" minLength={3} required onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="email"> correo electrónico del trabajo </label>
                    <input type="email" name="email" id="email" required onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="nationality"> país </label>
                    <select type="text" name="nationality" id="nationality" required onChange={handleChange}>
                        <option value="">Selecciona uno</option>
                        {
                            countries.map(country =><option key={country} value={country}>{country}</option>)
                        }
                        
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="phoneNumber"> numero de teléfono </label>
                    <input type="text" name="phoneNumber" id="phoneNumber" minLength={10} required onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="jobTitle"> puesto de trabajo </label>
                    <input type="text" name="jobTitle" id="jobTitle" minLength={2} required onChange={handleChange}/>
                </div>
                <button className='submitter' type="submit" disabled={waiting || formSubmitted}>
                    {
                        formSubmitted ?
                            '¡GRACIAS!'
                        : waiting ?
                            <Loader/>
                        :   'Inscríbete'
                        
                    }
                </button>
            </div>
        </form>
    )
}

export default Form