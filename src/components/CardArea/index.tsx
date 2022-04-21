import { useEffect } from "react";
import { CardRow } from "../../styled/Card.styled";
import CardItem from "./CardItem";
import { setList } from "../../store/slices/gameSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { shuffleArray } from "../../utils/shuffleArray";
import { data } from "../../api/data";
import { gameControl } from "../../store/slices/gameSlice";
import ScoreTable from "./ScoreTable";

const CardArea = () => {
  const dispatch = useAppDispatch();
  const { list, clickNumber } = useAppSelector((state) => state.game);

  useEffect(() => {
    dispatch(setList(shuffleArray(data)));
  }, [dispatch]);

  useEffect(() => {
    if (clickNumber === 2) {
      setTimeout(() => {
        dispatch(gameControl());
      }, 1000);
    }
  }, [clickNumber, dispatch]);

  return (
    <>
      <ScoreTable />
      <CardRow>
        {list.map((item, index) => (
          <CardItem key={index} item={item} />
        ))}
      </CardRow>
    </>
  );
};

export default CardArea;
