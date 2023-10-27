import { TUserBaseType, TUserJobType } from "./type/TUserType.ts";


const userData: TUserBaseType & TUserJobType = {
    name: "Mike",
    age: 12,
    companyName: "TheCodingPro",
    jobTitle: "Teacher",
    seniority: 3,
    userAddress: "台灣桃園市",
    companyAddress: "台灣台北市",
};


console.log("模組化 type:", userData);
