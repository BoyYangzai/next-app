"use client";
import { Progress, Steps } from "antd";
import { useEffect, useState } from "react";
import { OnBoardingData, OnBoardingGroupData } from "./type";
import OnBoardingItem from "./onBoardingItem";
import Image from "next/image";
import { PRIMARY_COLOR } from "../../tailwind.config";

const OnBoarding = ({
  data,
  onFinish,
  animation,
  groupData,
  startFrom = 0,
}: {
  data?: OnBoardingData;
  groupData?: OnBoardingGroupData;
  onFinish?: (res: string[]) => void;
  animation?: "fade" | "slide";
  startFrom?: number;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(startFrom);
  }, [startFrom]);

  const mergedData =
    data ?? groupData?.flatMap((group) => group.data) ?? ([] as OnBoardingData);

  let lastGroupPosition = 0;
  const nextGroupPosition = groupData?.map((group) => {
    lastGroupPosition += group.data.length;
    return lastGroupPosition;
  });

  // start from 0
  const currentGroupIndex =
    nextGroupPosition?.findLastIndex((pos) => pos < index) ?? 0;

  const groupTitle = groupData?.map((group) => group.groupTitle);
  // 只有当前 Index 的 title 会出现 其余的为空
  const mergedGroupTitle = groupTitle?.map((title, index) => {
    return {
      title: index === currentGroupIndex + 1 ? title : "",
    };
  });
  // onBoarding CP
  const [selectedResult, setSelectedResult] = useState<string[] | null>(null);
  const percent = (index / mergedData.length) * 100;
  const handleSelect = (res?: string) => {
    if (index <= mergedData.length - 1) {
      setSelectedResult([...(selectedResult ?? []), res!].filter(Boolean));
    }
  };
  const handleBack = () => {
    if (index > 0) setIndex(index - 1);
  };

  useEffect(() => {
    if (selectedResult) {
      if (index + 1 === mergedData?.length) {
        onFinish?.(selectedResult);
      }
      setIndex(index + 1);
    }
  }, [selectedResult]);

  const handleSkip = () => {
    onFinish?.(selectedResult ?? []);
  };

  return (
    <div className="w-full h-full flex-row justify-center items-start flex-wrap">
      <div className="w-full -translate-y-3">
        <Progress
          percent={percent}
          strokeColor={PRIMARY_COLOR}
          showInfo={false}
        />

        <div className="flex justify-between text-lg ml-2 md:hidden">
          {index > 0 && (
            <div className="flex ">
              <Image
                src="/svg/arrow-left.svg"
                alt=""
                width={20}
                height={20}
                onClick={handleBack}
              ></Image>
            </div>
          )}
          {index > 0 && (
            <div
              className="flex text-primary text-sm font-light cursor-pointer mr-4"
              onClick={handleSkip}
            >
              Skip {">"}
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center items-center -translate-y-4">
        <div className="w-80 md:w-[100%]">
          <Steps
            size="small"
            type="navigation"
            current={currentGroupIndex + 1}
            items={mergedGroupTitle}
            responsive={false}
          />
        </div>
      </div>
      <div className="w-full justify-center items-center text-lg ml-2 hidden md:flex translate-y-20">
        {index > 0 && (
          <div className="w-[60rem] flex cursor-pointer" onClick={handleBack}>
            <Image
              src="/svg/arrow-left.svg"
              alt=""
              width={20}
              height={20}
            ></Image>
            <span className="text-sm text-[#828282] ml-2">Back</span>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center mt-24 md:mt-40">
        <OnBoardingItem
          data={mergedData?.[index]}
          onClick={handleSelect}
          animation={animation}
        />
      </div>
    </div>
  );
};

export default OnBoarding;
