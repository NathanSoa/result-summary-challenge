import { Category } from "../../../../types/category"
import { Svg } from "../../../styles/Svg"
import { StyledReactionText } from "./Styles"

interface ReactionTextProps {
    name: string,
    svg: Category
}

export function ReactionText({
    name,
    svg
}: ReactionTextProps) {
    return (
        <StyledReactionText>
            <img src={Svg[svg]} alt={`${name} icon`} />
            <span className="font">{name}</span> 
        </StyledReactionText>
    )
}