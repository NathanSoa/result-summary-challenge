import { Aside } from "../Aside";
import { Score } from "../Score";
import { MainWrapper } from "./Styles";

import data from '../../../data/data.json'
import { Category } from "../../../types/category";

export interface Data {
  category: Category
  score: number
}

export function Main() {

    const userData = data as Data[]
    let totalScore = userData.reduce((acc, curr) => acc + curr.score, 0)
    totalScore = Number.parseInt((totalScore / userData.length).toFixed(0))

    return (
        <MainWrapper>
          <Score total={totalScore}/>
          <Aside data={userData}/>
        </MainWrapper>
    )
}