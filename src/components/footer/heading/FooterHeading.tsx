import '../css/heading.css'

function FooterHeading({name}: {name:string}) {
  return (
    <div className='heading-wrapper'>
        <p>{name}</p>
    </div>
  )
}

export default FooterHeading