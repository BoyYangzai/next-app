import { Button } from "antd";
import React from "react";

export interface SelectCardData {
  id?: string;
  title: string;
  content: string | string[];
  btnLabel: string;
}
const SelectCard = ({
  data,
  beforeContent,
}: {
  data: SelectCardData;
  beforeContent?: (item: SelectCardData) => React.ReactNode;
}) => {
  const { title, content, btnLabel } = data;
  return (
    <div className="w-[100%] md:w-[45%] lg:w-[29.5%] border-dashed border-grey border-2 flex justify-center items-center mb-5">
      <div className="w-[85%] py-4">
        <div className="font-bold text-lg">{title}</div>
        {beforeContent?.(data)}
        {typeof content === "string" ? (
          <div>{content}</div>
        ) : (
          content.map((item, index) => (
            <div key={index} className="mt-4">
              {item}
            </div>
          ))
        )}
        <Button
          type="primary"
          style={{
            width: "100%",
            height: "3rem",
            marginTop: "0.8rem",
          }}
        >
          {btnLabel}
        </Button>
      </div>
    </div>
  );
};

const SelectCardGroup = ({
  data,
  beforeContent,
}: {
  data: SelectCardData[];
  beforeContent?: (item: SelectCardData) => React.ReactNode;
}) => {
  return (
    <div className="w-[70%] h-full flex justify-between items-center flex-wrap gap-x-10 mt-8">
      {data.map((item, index) => (
        <SelectCard
          key={item.id ?? index}
          data={item}
          beforeContent={beforeContent}
        />
      ))}
    </div>
  );
};

export default SelectCardGroup;
