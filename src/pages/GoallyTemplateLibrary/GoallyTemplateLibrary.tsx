import React from "react";
import { GoallyTemplateStore } from "./../../stores/GoallyTemplateStore";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import "./GoallyTemplateLibrary.scss";
import { GoallyTemplate } from "./components/GoallyTemplate";

export const GoallyTemplateLibrary = observer(
  (): JSX.Element => {
    const history = useHistory();
    const Store = GoallyTemplateStore;
    const Goals = Store.GoalsTemplate;

    if (!Goals.length) {
      GoallyTemplateStore.loadData(history.location.pathname.slice(1));
      return <h1>Loading...</h1>;
    }

    return (
      <div className="GoallyTemplateLibrary">
        <h1 className="title">GoallyTemplateLibrary</h1>
        <GoallyTemplate Goals={Goals} />
      </div>
    );
  }
);
