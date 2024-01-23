import './index.css'

export const Contact = () => {
  return (
    <section id="contact" className="contact page">
      <h2 className="heading contact__title">CONTACT</h2>
      <form action="" className="contact__form">
        <div className="contact__inputs">
          <label>
            Name
            <input type="text" placeholder="Name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Email" />
          </label>
          <label>
            Subject
            <input type="text" placeholder="Subject" />
          </label>
          <label>
            Message
            <textarea rows={10} placeholder="Message"></textarea>
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
