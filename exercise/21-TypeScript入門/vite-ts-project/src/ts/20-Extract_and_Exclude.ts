type TButtonKeyAttr = "create" | "edit" | "success" | "error";
type TButtonValue = "新增" | "修改" | "完成" | "失敗";

//  Extract 聯合類型 "選取" 指定內容，另外組成新的 type
const successUseBtn = ["create", "success"];

// Exclude 聯合類型 "排除" 指定內容，另外組成新的 type
const errorUseBtn = ["edit", "error"];

