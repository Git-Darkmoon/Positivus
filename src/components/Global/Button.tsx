type ButtonProps = {
  children: React.ReactNode
  variant: "filled" | "outlined" | "accent"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, variant }: ButtonProps) {
  const VariantStyles = `btn btn__${variant}`

  return (
    <button type="button" className={VariantStyles}>
      {children}
    </button>
  )
}
export default Button
