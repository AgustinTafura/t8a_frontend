import { useState } from 'react'
import './style.scss'

const Form = () => {

    const countries = [ "Argentina", "Brasil", "Uruguay", "Paraguay", "Bolivia", "Peru", "Venezuela", "Colombia", "Mexico"]
    
    const [attendee, setAttendee] = useState({})
    
    const handleSubmit = (e) => {        
        e.preventDefault()
        
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setAttendee({...attendee, [name]:value})
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
            <button className='submitter' type="submit">
                Inscríbete
            </button>
        </div>
    </form>
  )
}

export default Form