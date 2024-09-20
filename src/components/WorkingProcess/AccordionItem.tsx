"use client"

import { MinusIcon, PlusIcon } from "lucide-react"
import { Process } from "./WorkingProcess"
import { useState } from "react"

function AccordionItem({ step, title, text }: Process) {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggle = () => {
    console.log("a")
    setIsVisible(!isVisible)
  }

  return (
    <article
      className={`cardTemplate accordion__item ${
        isVisible && "accordion__item--active"
      }`}
    >
      <header className="accordion__header">
        <div className="accordion__title">
          <span className="accordion__title--step">
            {step > 9 ? step : `0${step}`}
          </span>
          <h2 className="accordion__title--text">{title}</h2>
        </div>
        <button onClick={handleToggle} className="accordion__button">
          {isVisible ? <MinusIcon /> : <PlusIcon />}
        </button>
      </header>
      {isVisible && (
        <div>
          <div className="separator"></div>
          <p>{text}</p>
        </div>
      )}
    </article>
  )
}
export default AccordionItem
