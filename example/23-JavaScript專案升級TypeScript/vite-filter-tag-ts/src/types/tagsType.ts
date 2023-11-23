type TChildArray = {
  id: string;
  name: string;
};

type TTagsType = {
  id: string;
  name: string;
  child: TChildArray[];
};
