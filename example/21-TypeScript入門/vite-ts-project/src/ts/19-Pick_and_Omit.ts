// Pick_and_Omit
type TUserAllType = {
  name: string;
  age: number;
  userAddress: string;
  companyName: string;
  jobTitle: string;
  seniority: number;
  companyAddress: string;
};

// 可以使用 Pick 來挑選出需要的屬性，另外組成新的 type
const userBaseType: Pick<TUserAllType, "name" | "userAddress" | "jobTitle"> = {
  name: "Mike",
  userAddress: "Taiwan",
  jobTitle: "Frontend Engineer",
};

// 使用 Omit 來挑選出不需要的屬性，另外組成新的 type
const userJobType: Omit<TUserAllType, "name" | "age" | "userAddress"> = {
  companyName: "TheCodingPro",
  jobTitle: "Teacher",
  seniority: 3,
  companyAddress: "台灣台北市",
};
