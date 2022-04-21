import {
  Card,
  CardInner,
  CardFront,
  CardBack,
  CardImage,
} from "../../styled/Card.styled";

import { ItemType } from "../../types/item";
import { useAppDispatch } from "../../store/hooks";
import { changeOpen } from "../../store/slices/gameSlice";
interface CardItemProps {
  item: ItemType;
}

const CardItem = (props: CardItemProps) => {
  const { item } = props;

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changeOpen(item.id));
  };

  return (
    <Card onClick={handleClick}>
      <CardInner isComplated={item.completed} isFlipped={item.open}>
        <CardFront>
          <h1>?</h1>
        </CardFront>
        <CardBack>
          <CardImage isComplated={item.completed} src={`/images/${item.name}.png`} alt="Card Back" />
        </CardBack>
      </CardInner>
    </Card>
  );
};

export default CardItem;
