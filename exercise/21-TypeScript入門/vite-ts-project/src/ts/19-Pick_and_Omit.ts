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
const userBaseType = {
  name: "Mike",
  userAddress: "Taiwan",
  jobTitle: "Frontend Engineer",
};

// 使用 Omit 來挑選出不需要的屬性，另外組成新的 type
const userJobType = {
  companyName: "TheCodingPro",
  jobTitle: "Teacher",
  seniority: 3,
  companyAddress: "台灣台北市",
};
