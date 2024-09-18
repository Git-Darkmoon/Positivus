function SectionTitle({ title, text }: { title: string; text: string }) {
  return (
    <div className="sectionTitle">
      <h2 className="sectionTitle__title">{title}</h2>
      <p className="sectionTitle__text">{text}</p>
    </div>
  )
}
export default SectionTitle
