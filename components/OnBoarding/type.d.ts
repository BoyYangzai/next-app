export type Content = {
  colorType?: "colorful";
  label: string;
};

export interface OptionItem {
  label: string;
  value?: string;
  color?: boolean;
}
export interface OnBoardingItemData {
  title: string;
  type?: "select" | "input";
  //  select type
  options?: (OptionItem | string)[] | string[];
  //  input type
  content: Content[] | string | string[];
  placeholder?: string;
}

export type OnBoardingData = OnBoardingItemData[];

export type OnBoardingGroupData = {
  groupTitle: string;
  data: OnBoardingData;
}[];
