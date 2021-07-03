import React from "react";
import "./GoallyTemplate.scss";
import clock from "../img/clock.png";
import { CustomScrollBar } from "./../../../components/CustomScrollBar/CustomScrollBar";

interface Goal {
  name: string;
  maxCompletionTime: number;
  minCompletionTime: number;
  imgURL: string | null;
  _id: string;
  [x: string]: any;
}

interface GoallyTemplateProps {
  Goals: Goal[];
}

const ListItem = ({ goal }: { goal: Goal }): JSX.Element => {
  return (
    <li key={goal._id} className="GoalContainer">
      <div className="Goal">
        <img
          src={goal.imgURL || undefined}
          alt="ImgCrush"
          className="GoalImg"
        />
        <div className="GoalInfo">
          <h4>{goal.name}</h4>
          <span>
            <img src={clock} alt="Time" />
            <p>
              min {goal.minCompletionTime} minutes - max{" "}
              {goal.maxCompletionTime} minutes
            </p>
          </span>
        </div>
      </div>
    </li>
  );
};

export const GoallyTemplate = ({ Goals }: GoallyTemplateProps): JSX.Element => {
  const GoalsList = Goals.map((goal: Goal) => <ListItem goal={goal} />);
  const GoalsList2 = Goals.map((goal: Goal) => <ListItem goal={goal} />);
  const GoalsList3 = Goals.map((goal: Goal) => <ListItem goal={goal} />);
  const GoalsList4 = Goals.map((goal: Goal) => <ListItem goal={goal} />);

  return (
    <ul className="GoallyTemplate">
      <CustomScrollBar className="CustomScrollBar">
        {GoalsList}
        {GoalsList2}
        {GoalsList3}
        {GoalsList4}
      </CustomScrollBar>
    </ul>
  );
};
