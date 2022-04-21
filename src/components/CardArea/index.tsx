import { CardRow } from "../../styled/Card.styled"
import CardItem from "./CardItem"
import { data } from "../../api/data"
import { shuffleArray } from "../../utils/shuffleArray"

const CardArea = () => {

    const arr = shuffleArray(data);

  return (
    <CardRow>
       {arr.map((item, index) => (
           <CardItem key={index} item={item} />
         ))}
    </CardRow>
  )
}

export default CardArea
