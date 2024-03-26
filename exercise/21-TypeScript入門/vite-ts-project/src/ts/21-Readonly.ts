// Readonly 讓物件屬性也只能讀取

type TJobType = {
  companyName: string;
  jobTitle: string;
  seniority: number;
  companyAddress: string;
};


const jobData: TJobType = {
  companyName: "TheCodingPro",
  jobTitle: "Teacher",
  seniority: 3,
  companyAddress: "台灣台北市",
 };
 


 jobData.jobTitle = "Engineer";
