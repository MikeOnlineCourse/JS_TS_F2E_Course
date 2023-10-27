// Readonly

type TJobType = {
  companyName: string;
  jobTitle: string;
  seniority: number;
  companyAddress: string;
};

type TReadOnlyJobType = Readonly<TJobType>;

const jobData: TReadOnlyJobType = {
  companyName: "TheCodingPro",
  jobTitle: "Teacher",
  seniority: 3,
  companyAddress: "台灣台北市",
};

// 無法更改jobData內的屬性，因為已經被設定為只能讀取
jobData.jobTitle = "Engineer";
