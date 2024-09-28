"use client"
import { useState } from "react"
import TestimonialComment from "./TestimonialComment"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

export type Testimonial = {
  readonly author: string
  readonly role: string
  readonly review: string
}

const testimonials: Testimonial[] = [
  {
    author: "Alex Jensen",
    role: "Head of Marketing in Dribble",
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    author: "Samantha Reyes",
    role: "CEO of BrightEdge Solutions",
    review:
      "Positivus transformed our digital marketing strategy. Their expertise in SEO and content creation has led to a steady increase in organic traffic and a stronger online presence. Their team is always quick to respond and provides valuable insights that help us stay ahead of the competition.",
  },
  {
    author: "Michael Thompson",
    role: "COO of SkyTech Innovations",
    review:
      "Working with Positivus has been a game-changer for our business. They not only improved our PPC campaigns but also optimized our social media presence, resulting in higher engagement and conversions. Their data-driven approach is exactly what we needed to grow our online sales.",
  },
  {
    author: "Laura Bennett",
    role: "Head of Digital Marketing at BlueWave Enterprises",
    review:
      "Positivus has exceeded our expectations. Their tailored approach to SEO and social media marketing has driven significant improvements in both traffic and user engagement. The team is knowledgeable and genuinely invested in helping us succeed online.",
  },
  {
    author: "Daniel Park",
    role: "CMO of GreenLeaf Organics",
    review:
      "We've seen incredible growth in our website traffic and lead generation thanks to Positivus. Their attention to detail and commitment to results have made a significant impact on our business. We highly recommend them to anyone looking to enhance their digital marketing efforts.",
  },
]

function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="testimonials__container">
      <div className="testimonials__slider">
        {testimonials.map((testimonial) => {
          return (
            <TestimonialComment
              key={testimonial.author}
              testimonial={testimonial}
              currentSlide={currentSlide}
            />
          )
        })}
      </div>
      <div className="buttons__container">
        <button onClick={prevSlide} type="button">
          <ArrowLeftIcon size={32} />
        </button>
        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={index === currentSlide ? "active" : ""}
            >
              x
            </span>
          ))}
        </div>
        <button onClick={nextSlide} type="button">
          <ArrowRightIcon size={32} />
        </button>
      </div>
    </div>
  )
}
export default TestimonialsSlider
