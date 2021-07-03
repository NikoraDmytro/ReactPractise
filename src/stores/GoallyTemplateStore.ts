import axios from "axios";
import { flow, makeAutoObservable } from "mobx";

type Goals = {
  name: string;
  maxCompletionTime: number;
  minCompletionTime: number;
  imgURL: string | null;
  _id: string;
  [x: string]: any;
};

type ServerResponse = {
  data: {
    activities: Goals[];
    [y: string]: any;
  }[];
  [x: string]: any;
};

const address = "https://wlapi.goally.co/v1/api/routines/library";

class GoallyTemplate {
  GoalsTemplate: Goals[] | [];

  constructor() {
    this.GoalsTemplate = [];
    this.loadData = this.loadData.bind(this);
    makeAutoObservable(this);
  }

  loadData = flow(function* (
    this: GoallyTemplate,
    token: string
  ): Generator<any, void, ServerResponse> {
    try {
      const response = yield axios.get(address, {
        headers: { Authorization: token },
      });

      let Goals: Goals[] = [];

      response.data.forEach((item) =>
        item.activities.forEach((goal) =>
          Goals.push({
            _id: goal._id,
            imgURL: goal.imgURL,
            name: goal.name,
            maxCompletionTime: goal.maxCompletionTime,
            minCompletionTime: goal.minCompletionTime,
          })
        )
      );

      this.GoalsTemplate = [...Goals];
    } catch (err) {
      console.log(err);
    }
  });
}

export const GoallyTemplateStore = new GoallyTemplate();
