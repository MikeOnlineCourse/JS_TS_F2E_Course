// Partial
type TUserDataInfo = {
  name: string;
  age: number;
  address: string;
};

// 把所有的屬性變成可選的
const user1: Partial<TUserDataInfo> = {
  name: "Mike",
  age: 12,
};

// 直接使用是沒辦法的
const user2: TUserDataInfo = {
  name: "Mike",
  age: 12,
};
