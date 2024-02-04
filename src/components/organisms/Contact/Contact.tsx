'use client'
import './index.css'

export const Contact = () => {
  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    const btn = e.currentTarget
    btn.classList.add('btn-primary--active')
    setTimeout(() => {
      btn.classList.remove('btn-primary--active')
    }, 400)
  }
  return (
    <section id="contact" className="contact page pc">
      <h2 className="heading contact__title">CONTACT</h2>
      <form onSubmit={handleSend} className="contact__form">
        <div className="contact__inputs">
          <label>
            Name
            <input type="text" placeholder="Pepito Patolin" />
          </label>
          <label>
            Email
            <input type="email" placeholder="pepito@email.com" />
          </label>
          <label>
            Subject
            <input type="text" placeholder="Colaboración" />
          </label>
          <label>
            Message
            <textarea placeholder="Message ..."></textarea>
          </label>
        </div>
        <label onClick={handleClick} className='contact__button' itemType='button'>
          <div className='contact__button-border'></div>
          <button className="btn btn-primary" title="send"> Send</button>
        </label>
      </form>
      <figure className="circles">
        <div className="circle-primary"></div>
        <div className="circle-secondary"></div>
      </figure>
    </section>
  )
}
