import React from "react";
import "./GoallyTemplate.scss";

interface Goals {
  name: string;
  maxCompletionTime: number;
  minCompletionTime: number;
  imgURL: string | null;
  _id: string;
  [x: string]: any;
}

interface GoallyTemplateProps {
  Goals: Goals[];
}

export const GoallyTemplate = ({ Goals }: GoallyTemplateProps): JSX.Element => {
  return (
    <ul className="GoallyTemplate">
      {Goals.map((goal) => (
        <li key={goal._id}>{goal.name}</li>
      ))}
    </ul>
  );
};
