import { ScoreRow, Score } from "../../styled/Score.styled";
import { Button, Flex } from "../../styled/Global";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { gameReset, setList } from "../../store/slices/gameSlice";
import { data } from "../../api/data";
import { shuffleArray } from "../../utils/shuffleArray";

const ScoreTable = () => {

    const dispatch = useAppDispatch();

  const { score, completedNumber } = useAppSelector((state) => state.game);

    const handleClick = () => {
        dispatch(gameReset());
        dispatch(setList(shuffleArray(data)));
    }

  return (
    <ScoreRow>
      <Flex>
        <Button onClick={handleClick} bg={'#F4F5F7'}>Restart</Button>
        <Button onClick={handleClick} disabled={completedNumber === 30 ? false : true} bg={'#ff9d00'} color={'white'}>Replay</Button>
      </Flex>
      <Score>Score: {score}</Score>
    </ScoreRow>
  );
};

export default ScoreTable;
