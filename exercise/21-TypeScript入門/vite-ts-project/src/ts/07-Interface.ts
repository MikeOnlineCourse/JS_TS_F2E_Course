
const mike = { firstName: "Cheng", lastName: "Mike" };

// -----------------------------


const jobInfo = {
  job: "Frontend Engineer",
  baseInfo: {
    name: "Mike",
    age: 18,
    address: "Taipei",
  },
};

// -----------------------------


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

interface IBoxStyle {
  color: string;
  border: string;
  padding: string;
  margin: string;
}

const box = {
  width: "100px",
  height: "100px",
  color: "red",
  border: "4px solid #000",
  padding: "10px",
  margin: "10px",
  "font-size": "16px",
  "font-weight": "bold",
};