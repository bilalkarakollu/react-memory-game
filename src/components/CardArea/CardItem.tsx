import { Card, CardInner, CardFront, CardBack, CardImage } from "../../styled/Card.styled";
import { useState } from "react";

interface CardItemProps {
  item: string;
}

const CardItem = (props:CardItemProps) => {

  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card onClick={handleClick}>
      <CardInner isFlipped={isFlipped}>
        <CardFront>
          <h1>?</h1>
        </CardFront>
        <CardBack>
          <CardImage src={`/images/${props.item}.png`} alt="Card Back" />
        </CardBack>
      </CardInner>
    </Card>
  );
};

export default CardItem;
