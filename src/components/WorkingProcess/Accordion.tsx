import AccordionItem from "./AccordionItem"
import { type Process } from "./WorkingProcess"

function Accordion({ processes }: { processes: Process[] }) {
  return (
    <section className="accordion">
      {processes.map(({ step, title, text }) => {
        return (
          <li key={step}>
            <AccordionItem step={step} title={title} text={text} />
          </li>
        )
      })}
    </section>
  )
}
export default Accordion
