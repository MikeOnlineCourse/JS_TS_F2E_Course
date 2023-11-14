interface IPerson {
  firstName: string;
  lastName: string;
}

const mike:IPerson = { firstName: "Cheng", lastName: "Mike" };

// -----------------------------

interface IJobInfo {
  job: "Frontend Engineer";
  baseInfo: {
    name: string;
    age: number;
    address: string;
  };
}

const jobInfo: IJobInfo = {
  job: "Frontend Engineer",
  baseInfo: {
    name: "Mike",
    age: 18,
    address: "Taipei",
  },
};

// -----------------------------

interface IArea {
  name: string;
  zip: string;
}

interface ICity {
  name: string;
  area: IArea[];
}

const taipei: ICity = {
  name: "新北市",
  area: [
    {
      name: "萬里區",
      zip: "207",
    },
    {
      name: "金山區",
      zip: "208",
    },
  ],
};

// -----------------------------

interface IWidth {
  width: string;
}

interface IHeight {
  height: string;
}

interface IBoxFontSize {
  "font-size": string;
  "font-weight": string;
}

interface IBoxStyle extends IWidth, IHeight, IBoxFontSize {
  color: string;
  border: string;
  padding: string;
  margin: string;
}

const box: IBoxStyle = {
  width: "100px",
  height: "100px",
  color: "red",
  border: "4px solid #000",
  padding: "10px",
  margin: "10px",
  "font-size": "16px",
  "font-weight": "bold",
};
