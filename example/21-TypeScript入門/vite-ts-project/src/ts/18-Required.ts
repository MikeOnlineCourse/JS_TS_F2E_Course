// Required

type TUserRequiredInfo = {
  name: string;
  age?: number;
  address?: string;
};

// 把所有的屬性變成必選的
const user3: Required<TUserRequiredInfo> = {
  name: "Mike",
  age: 12,
};

// 沒使用 Required 的話，就是正常的樣子
const user4: TUserRequiredInfo = {
  name: "Mike",
  age: 12,
};
