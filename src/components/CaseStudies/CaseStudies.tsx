import Link from "next/link"
import SectionTitle from "../Global/SectionTitle"
import { ArrowRight } from "lucide-react"

function CaseStudies() {
  return (
    <>
      <SectionTitle
        title="Case Studies"
        text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <section className="caseStudies">
        <article className="caseStudy">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <Link className="caseStudy__link" href={"#"}>
            Learn More <ArrowRight className="caseStudy__link--icon" />
          </Link>
        </article>
        <article className="caseStudy">
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <Link className="caseStudy__link" href={"#"}>
            Learn More <ArrowRight className="caseStudy__link--icon" />
          </Link>
        </article>
        <article className="caseStudy">
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <Link className="caseStudy__link" href={"#"}>
            Learn More <ArrowRight className="caseStudy__link--icon" />
          </Link>
        </article>
      </section>
    </>
  )
}
export default CaseStudies
