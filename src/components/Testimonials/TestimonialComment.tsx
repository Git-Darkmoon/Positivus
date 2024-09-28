import { Testimonial } from "./TestimonialsSlider"

function TestimonialComment({
  testimonial,
  currentSlide,
}: {
  testimonial: Testimonial
  currentSlide: number
}) {
  const { author, role, review } = testimonial
  return (
    <div
      className="testimonials__comment"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      <div className="testimonials__comment__text">
        <p className="testimonials__comment__paragraph">{review}</p>
      </div>
      <div className="testimonials__authorInfo">
        <h2 className="testimonials__author">{author}</h2>
        <p className="testimonials__role">{role}</p>
      </div>
    </div>
  )
}
export default TestimonialComment
