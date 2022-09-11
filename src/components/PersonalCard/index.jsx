import './style.scss'
import logo from '../../assets/img-rodriguez.png'


const PersonalCard = ({name, jobTitle}) => {
  return (
    <div className='card'>
        <div className='card-logo'>
            <img className="" src={logo} alt="alternative"/>
        </div>
        <div className='card-body'>
            <div className='person-name'>{name}</div>
            <div className='person-job-title'>{jobTitle}</div>
        </div>
    </div>
  )
}

export default PersonalCard