import { StyledButton } from "./Styles"

interface ButtonProps {
    label: string
}

export function Button({ label }: ButtonProps) {
    return (
        <StyledButton type="submit">{label}</StyledButton>
    )
}