import Image from "next/image"

type Company = {
  imagePath: string
}

const companies: Company[] = [
  {
    imagePath: "/CompanyLogos/Amazon_logo.png",
  },
  {
    imagePath: "/CompanyLogos/Dribble_logo.png",
  },
  {
    imagePath: "/CompanyLogos/HubSpot_logo.png",
  },
  {
    imagePath: "/CompanyLogos/Netflix_logo.png",
  },
  {
    imagePath: "/CompanyLogos/Notion_logo.png",
  },
  {
    imagePath: "/CompanyLogos/Zoom_logo.png",
  },
]

function Companies() {
  return (
    <div className="companies">
      {companies.map(({ imagePath }) => {
        return (
          <Image
            key={imagePath}
            src={imagePath}
            alt={"Company Logo"}
            width={80}
            height={80}
          />
        )
      })}
    </div>
  )
}
export default Companies
