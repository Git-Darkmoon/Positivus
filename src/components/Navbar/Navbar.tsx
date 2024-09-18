import Button from "../Global/Button"
import Logo from "./Logo"

const navLinks: { text: string; path: string }[] = [
  {
    text: "About us",
    path: "#about",
  },
  {
    text: "services",
    path: "#services",
  },
  {
    text: "use cases",
    path: "#use-cases",
  },
  {
    text: "pricing",
    path: "#pricing",
  },
  {
    text: "blog",
    path: "#blog",
  },
]

function Navbar() {
  return (
    <header className="navbar">
      <Logo />
      <nav className="navbar__container">
        <ul className="navbar__elements">
          {navLinks.map(({ text, path }) => (
            <li key={path}>
              <a className="navbar__links" href={path}>
                {text}
              </a>
            </li>
          ))}
          <Button variant="outlined">Request a quote</Button>
        </ul>
      </nav>
    </header>
  )
}
export default Navbar
