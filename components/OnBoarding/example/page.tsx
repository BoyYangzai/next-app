"use client";
import { useEffect, useState } from "react";
import OnBoarding from "..";
import { Progress } from "antd";
import Image from "next/image";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { OnBoardingGroupData } from "../type";
import { useMediaQuery } from "react-responsive";

const OnBoardingPage = () => {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const onBoardingData: OnBoardingGroupData = [
    {
      groupTitle: isMobile ? "Welcome" : "Getting Start",
      data: [
        {
          title: "Welcome Message",
          content: [
            "Welcome to a serene support space.",
            "I'm Olivia, your well-being guide.",
            "Privacy is key, and we start with your consent.",
          ],
          type: "select",
          options: [
            {
              label: "Yes, I consent",
              color: true,
            },
            "No, not now",
          ],
        },
        {
          title: "Email Address Inquiry",
          content: "To keep you updated, may I have your email address?",
          type: "input",
          placeholder: "xxxxx@gmail.com",
        },
        {
          title: "Phone Number Inquiry",
          content: "For urgent updates, please provide your phone number.",
          type: "input",
          placeholder: "(638) 263-7844",
        },
        {
          title: "Introduction to Personal Information Collection",
          content:
            "To personalize your experience, may I know your age, gender, culture, and language preference?",
        },
        {
          title: "Age Group Inquiry",
          content: "Please select your age group.",
          type: "select",
          options: ["Under 18", "18-34", "35-49", "50+"],
        },
        {
          title: "Gender Identity Inquiry",
          content: "What is your gender identity?",
          type: "select",
          options: ["Male", "Female", "Other"],
        },
        {
          title: "Cultural Background Inquiry",
          content: "Would you share your cultural background?",
        },
        {
          title: "Preferred Language Inquiry",
          content: "Which language do you prefer?",
          type: "select",
          options: ["English", "Spanish", "Other"],
        },
        {
          title: "Holistic Approach Introduction",
          content:
            "Mental health is multifaceted, involving work, family, and daily life. We'll consider all aspects of your well-being.",
        },
        {
          title: "Life Stage Inquiry",
          content: "Are you studying, working, or something else?",
          type: "select",
          options: ["Studying", "Working", "Unemployed", "Retired", "Other"],
        },
        {
          title: "Relationship Status Inquiry",
          content: "What is your current relationship status?",
          type: "select",
          options: [
            "Single",
            "In a relationship",
            "Married",
            "It's complicated",
          ],
        },
      ],
    },
    {
      groupTitle: "K10 Questionnaire",
      data: [
        {
          title: "Feeling Nervous",
          content:
            "Over the last 4 weeks, about how often have you felt very nervous?",
          options: [
            "None of the time",
            "A little of the time",
            "Some of the time",
            "Most of the time",
            "All of the time",
          ],
        },
        {
          title: "Unable to Relax",
          content:
            "About how often have you felt unable to relax, even when you were not doing anything?",
          options: [
            "None of the time",
            "A little of the time",
            "Some of the time",
            "Most of the time",
            "All of the time",
          ],
        },
        {
          title: "Depressed",
          content: "About how often have you felt depressed?",
          options: [
            "None of the time",
            "A little of the time",
            "Some of the time",
            "Most of the time",
            "All of the time",
          ],
        },
        {
          title: "Unhappy",
          content:
            "About how often did you feel that everything was an effort?",
          options: [
            "None of the time",
            "A little of the time",
            "Some of the time",
            "Most of the time",
            "All of the time",
          ],
        },
        {
          title: "Worthless",
          content:
            "About how often have you felt that you were unable to concentrate on things that usually interest you?",
          options: [
            "None of the time",
            "A little of the time",
            "Some of the time",
            "Most of the time",
            "All of the time",
          ],
        },
        {
          title: "Feeling Worthless",
          content:
            "Over the last 4 weeks, about how often have you felt worthless?",
          options: [
            "None of the time",
            "A little of the time",
            "Some of the time",
            "Most of the time",
            "All of the time",
          ],
        },
        {
          title: "Totally Unable to Function",
          content:
            "Over the last 4 weeks, about how often have you felt that you were totally unable to function?",
          options: [
            "None of the time",
            "A little of the time",
            "Some of the time",
            "Most of the time",
            "All of the time",
          ],
        },
        {
          title: "Life Not Worth Living",
          content:
            "Over the last 4 weeks, about how often have you thought that life wasn't worth living?",
          options: [
            "None of the time",
            "A little of the time",
            "Some of the time",
            "Most of the time",
            "All of the time",
          ],
        },
        {
          title: "Feeling Hopeless",
          content:
            "Over the last 4 weeks, about how often have you felt hopeless about the future?",
          options: [
            "None of the time",
            "A little of the time",
            "Some of the time",
            "Most of the time",
            "All of the time",
          ],
        },
        {
          title: "Concentrating on Tasks",
          content:
            "Over the last 4 weeks, about how often have you been feeling that everything was an effort, even washing and dressing?",
          options: [
            "None of the time",
            "A little of the time",
            "Some of the time",
            "Most of the time",
            "All of the time",
          ],
        },
        {
          title: "K10 Questionnaire Completion",
          content:
            "Thank you for completing the K10 questionnaire. Your responses will help assess your mental health status.",
        },
      ],
    },
    {
      groupTitle: "Olivia Star",
      data: [
        {
          title: "Post-Questionnaire Reassurance",
          content:
            "Thank you for your openness. You've earned 25 stars towards new sessions and resources.",
        },
        {
          title: "Introduction to the Star System",
          content:
            "Earn stars for engagement and progress. They're milestones on your growth journey.",
        },
        {
          title: "Encouragement and Motivation",
          content:
            "You're not alone. Your first step has earned you 15 stars towards meaningful progress.",
        },
        {
          title: "Transition to Program Recommendation",
          content:
            "Let's explore tailored options for your well-being journey together.",
        },
        {
          title: "Olivia's Daily Motivation and Reminder Prompt",
          content:
            "Each session you complete earns you a 'Star of Progress'. Let's celebrate your dedication and make today a win!",
        },
      ],
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const [isFinish, setIsFinish] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isFinish) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [isFinish]);
  return (
    <div className="w-full h-full">
      <div className="h-full flex-wrap justify-center items-center">
        {isFinish ? (
          <div className="w-full h-full flex justify-center items-start flex-wrap">
            <div className="w-full -translate-y-3">
              <Progress
                percent={100}
                strokeColor={"#FD2D55"}
                showInfo={false}
              />
            </div>
            <div className="w-full flex justify-center items-center flex-wrap -mt-40">
              <Image
                className="rounded-full overflow-hidden"
                src={"/img/olivia_avatar.jpeg"}
                alt=""
                width={100}
                height={100}
              ></Image>
              <div className="w-[80%] font-bold text-center text-lg mt-10">
                Thank you for taking the first step with Olivia 👋
              </div>
              <div className="w-full text-center text-gray-500 mb-10 mt-2">
                Your mental health journey starts soon
              </div>
              <LoadingOutlined
                style={{
                  color: "#FD2D55",
                }}
              ></LoadingOutlined>
            </div>
          </div>
        ) : (
          mounted && (
            <OnBoarding
              onFinish={(res) => {
                console.log("onboarding finish", res);
                setIsFinish(true);
              }}
              groupData={onBoardingData}
              startFrom={0}
            />
          )
        )}
      </div>
    </div>
  );
};

export default OnBoardingPage;
