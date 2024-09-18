import Image from "next/image"
import Button from "../Global/Button"

function CTA() {
  return (
    <section className="cta">
      <div className="cta__information">
        <h3 className="cta__title">Let&apos;s make things happen</h3>
        <p className="cta__text">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button variant="filled">Get your free proposal</Button>
      </div>
      <div className="cta__illustration">
        <Image
          src={"/ServicesAssets/CTA.png"}
          alt="Call To Action asset"
          width={500}
          height={500}
        />
      </div>
    </section>
  )
}
export default CTA
