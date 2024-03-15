/**
 * 列舉 (Enum)
 */
  
function getTodaySpecial(day = "") {
  switch (day) {
    case "Monday":
      return "星期一大特價: 買一送一!";
    case "Tuesday":
      return "星期二大特價: 三人同行一人免費!";
    case "Wednesday":
      return "星期三大特價: 五折優惠!";
    case "Thursday":
      return "星期四大特價: 三人同行一人免費!";
    case "Friday":
      return "星期五大特價: 五折優惠!";
    case "Saturday":
      return "星期六大特價: 買一送一!";
    case "Sunday":
      return "星期日大特價: 三人同行一人免費!";
    default:
      return "今天沒有特價活動!";
  }
}

console.log(getTodaySpecial());

  // ------------------------------
  
// 使用者在線上的裝態
// Offline, // 離線
// Online, // 上線
// leave, // 不在位子上


function getLOLUserStatus(status = "") {
  if (status === "Online") {
    return "上線";
  } else if (status === "Offline") {
    return "離線";
  } else if (status === "leave") {
    return "不在位子上";
  }
}

console.log(getLOLUserStatus());
  
  // ------------------------------
  
  // 非同步錯誤代碼
  // NotFound = 404,
  // Forbidden = 403,
  // Unauthorized = 401,

  function handleError(code = 0) {
    switch (code) {
      case 404:
        console.log("ERROR: 沒有這個東西");
        break;
      case 403:
        console.log("ERROR: 禁止存取");
        break;
      case 401:
        console.log("ERROR: 未經授權");
        break;
      default:
        console.log("ERROR: 未知的錯誤");
    }
  }
  
  console.log(handleError());