/**
 * 列舉 (Enum)
 * */

// 星期幾
enum DaysWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getTodaySpecial(day: DaysWeek) {
  switch (day) {
    case DaysWeek.Monday:
      return "星期一大特價: 買一送一!";
    case DaysWeek.Tuesday:
      return "星期二大特價: 三人同行一人免費!";
    case DaysWeek.Wednesday:
      return "星期三大特價: 五折優惠!";
    case DaysWeek.Thursday:
      return "星期四大特價: 三人同行一人免費!";
    case DaysWeek.Friday:
      return "星期五大特價: 五折優惠!";
    case DaysWeek.Saturday:
      return "星期六大特價: 買一送一!";
    case DaysWeek.Sunday:
      return "星期日大特價: 三人同行一人免費!";
    default:
      return "今天沒有特價活動!";
  }
}

console.log(getTodaySpecial(DaysWeek.Monday));

// ------------------------------

// 使用者在線上的裝態
enum UserLoginStatus {
  Offline, // 離線
  Online, // 上線
  leave, // 不在位子上
}

function getLOLUserStatus(status: UserLoginStatus) {
  if (status === UserLoginStatus.Online) {
    return "上線";
  } else if (status === UserLoginStatus.Offline) {
    return "離線";
  } else if (status === UserLoginStatus.leave) {
    return "不在位子上";
  }
}

console.log(getLOLUserStatus(UserLoginStatus.Online));

// ------------------------------

// 非同步錯誤代碼
enum StatusErrorCodes {
  NotFound = 404,
  Forbidden = 403,
  Unauthorized = 401,
}

function handleError(code: StatusErrorCodes) {
  switch (code) {
    case StatusErrorCodes.NotFound:
      console.log("ERROR: 沒有這個東西");
      break;
    case StatusErrorCodes.Forbidden:
      console.log("ERROR: 禁止存取");
      break;
    case StatusErrorCodes.Unauthorized:
      console.log("ERROR: 未經授權");
      break;
    default:
      console.log("ERROR: 未知的錯誤");
  }
}

console.log(handleError(StatusErrorCodes.Forbidden));
