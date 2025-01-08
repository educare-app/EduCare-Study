import './school.css'

function Schools({path}: {path: string}) {

  return (
    <div className='school-logo'>
        <img src={path} alt="client-log" loading='lazy'/>
    </div>
  )
}

export default Schools