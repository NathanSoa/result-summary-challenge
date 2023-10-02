import { ScoreCircle, ScoreContainer, ScoreDescription } from "./Styles";

interface ScoreProps {
    total: number
}
export function Score({ total }: ScoreProps) {
    return (
        <ScoreContainer>
            <h1>Your Result</h1>
            <ScoreCircle>
                <span className="main-number">{total}</span> of 100
            </ScoreCircle>
            <ScoreDescription>
                <h2>Great</h2>
                <p>You scored higher than 65% of the peple who have taken these tests.</p>
            </ScoreDescription>
      </ScoreContainer>
    )
}