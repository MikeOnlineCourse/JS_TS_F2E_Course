type TUserInfo = {
  id: number;
  name: string;
  age: number;
};

// 結合類型
type TJobInfo = {
  baseInfo: TUserInfo;
  job?: string;
};

const user: TUserInfo = { id: 1, name: "mike", age: 12 };

const job: TJobInfo = {
  baseInfo: {
    id: 1,
    name: "mike",
    age: 12,
  },
  job: "Frontend Engineer",
};

// ------------------------------------------------------------

type THumanInfo = {
  sex: string;
  age: number;
};

// 擴充類型
type TPeopleInfo = THumanInfo & {
  name: string;
  address?: string;
};

const person: TPeopleInfo = {
  name: "mike",
  age: 12,
  sex: "boy",
  address: "Taiwan",
};
