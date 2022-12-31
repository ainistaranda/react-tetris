// components

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { createStage } from "../gameHelpers";

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="score" />
          <Display text="rows" />
          <Display text="level" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
};

export default Tetris;
