import Image from "next/image"
import Button from "../Global/Button"

function ContactForm() {
  return (
    <form className="contact__form">
      <div className="contact__form__group">
        <div className="contact__form__radioGroup">
          <div>
            <input
              type="radio"
              name="category"
              id="greeting"
              value={"Say hi"}
              required
            />
            <label htmlFor="greeting">Say Hi</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              id="quote"
              value={"Get a quote"}
              required
            />
            <label htmlFor="quote">Get a quote</label>
          </div>
        </div>
        <div className="contact__form__inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input
              className="contact__input"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              className="contact__input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              className="contact__input"
              name="message"
              id="message"
              placeholder="Message"
              rows={9}
              required
            />
          </div>

          <Button type="submit" variant="filled">
            Send a message
          </Button>
        </div>
      </div>
      {/* Right Illustration */}
      <Image
        src={"/Contact/illustration.png"}
        alt="Contact illustration"
        width={500}
        height={500}
        className="contact__form__illustration"
      />
    </form>
  )
}
export default ContactForm
