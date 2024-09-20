import { UUID } from "crypto"
import SectionTitle from "../Global/SectionTitle"
import TeamCard from "./TeamCard"

export type TeamMember = {
  id: UUID
  img: string
  name: string
  role: string
  description: string
}

const team: TeamMember[] = [
  {
    id: crypto.randomUUID() as UUID,
    img: "/Team/Michael_Brown.png",
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
  },
  {
    id: crypto.randomUUID() as UUID,
    img: "/Team/Sarah_Thompson.png",
    name: "Sarah Thompson",
    role: "Lead Frontend Developer",
    description:
      "8+ years of experience building responsive web applications. Expert in React, CSS3, and modern JavaScript frameworks.",
  },
  {
    id: crypto.randomUUID() as UUID,
    img: "/Team/Carlos_Hernandez.png",
    name: "Carlos Hernandez",
    role: "Product Manager",
    description:
      "Over a decade of experience in product management and team leadership. Skilled in agile methodologies and cross-functional collaboration.",
  },
  {
    id: crypto.randomUUID() as UUID,
    img: "/Team/Emily_Mucken.png",
    name: "Emily Mucken",
    role: "UX/UI Designer",
    description:
      "Creative problem-solver with a passion for user-centric design. Specializes in crafting intuitive and engaging user experiences.",
  },
  {
    id: crypto.randomUUID() as UUID,
    img: "/Team/James_OConnor.png",
    name: "James O'Connor",
    role: "Backend Developer",
    description:
      "Highly skilled in server-side development with a strong focus on Node.js and database architecture. 6+ years of experience in API design and microservices.",
  },
  {
    id: crypto.randomUUID() as UUID,
    img: "/Team/Aisha_Patel.png",
    name: "Aisha Patel",
    role: "Data Analyst",
    description:
      "Analytical thinker with 4+ years of experience in data visualization and statistical analysis. Adept in Python and SQL for deriving actionable insights.",
  },
]

function Team() {
  return (
    <>
      <SectionTitle
        title="Team"
        text="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <section className="team__container">
        {team.map((teamMember) => {
          return <TeamCard key={teamMember.id} memberInfo={teamMember} />
        })}
      </section>
    </>
  )
}
export default Team
