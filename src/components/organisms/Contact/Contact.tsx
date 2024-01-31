import './index.css'

export const Contact = () => {
  return (
    <section id="contact" className="contact page pc">
      <h2 className="heading contact__title">CONTACT</h2>
      <form action="" className="contact__form">
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
        <button className="btn btn-primary" title="send"> Send</button>
      </form>
      <figure className="circles">
        <div className="circle-primary"></div>
        <div className="circle-secondary"></div>
      </figure>
    </section>
  )
}
