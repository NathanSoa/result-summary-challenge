import { Category } from "../../../types/category"
import { ReactionWrapper } from "./Styles"
import { ReactionText } from "./components/ReactionText"

export interface ReactionProps {
    color: 'red' | 'green' | 'orange' | 'cobalt',
    name: string,
    score: number,
    svg: Category,
    maxScore?: number
}

export function Reaction({
    color,
    name,
    score,
    svg,
    maxScore = 100
}: ReactionProps) {
    return (
        <ReactionWrapper color={color}>
            <ReactionText 
                name={name}
                svg={svg}
            />
            <span className="score">
                <span className="actual-score">{score}</span> 
                <span> / {maxScore}</span>
            </span>
        </ReactionWrapper>
    )
}