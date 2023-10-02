import { Button } from "../Button";
import { Data } from "../Main";
import { Reaction } from "../Reaction";
import { AsideWrapper } from "./Styles";
import { CategoryColor } from "../../../types/category";
import { Svg } from "../../styles/Svg";

interface AsideProps {
    data: Data[]
}

export function Aside({data}: AsideProps) {

    return <AsideWrapper>
        <h2>Summary</h2>
        <div>
            {
                data.map((item, index) => {
                    const formattedCategory = item.category.charAt(0).toUpperCase() + item.category.slice(1).toLowerCase()

                    return <Reaction 
                        color={CategoryColor[item.category]}
                        name={formattedCategory}
                        svg={item.category as keyof typeof Svg}
                        score={item.score}
                        key={index}
                    />
                })
            }
        </div>
        <div>
            <Button label={"Continue"} />
        </div>
    </AsideWrapper>
}