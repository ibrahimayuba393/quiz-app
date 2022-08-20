import tw from "tailwind-styled-components";

export const MainContainer = tw.div`

`;

export const Container = tw.div`
bg-[#99928a] w-full h-screen flex flex-col items-center justify-center
`;

export const HeaderDiv = tw.div`
flex flex-col gap-2
`;

export const ProgressBarDiv = tw.div`
w-full bg-gray-200 h-1
`;

export const ProgressBar = tw.div`
bg-[#1864ab] h-1
`;

export const MainHeader = tw.h2`
mb-4 pr-48 text-white md:pr-96
`;

export const ButtonDiv = tw.div`
mt-4 relative
`;

export const PreviousButtonDiv = tw.div`
inline absolute right-20 md:right-44
`;

export const PreviousButton = tw.button`
h-11 w-20 bg-[#339af0] rounded-lg hover:bg-[#1864ab]
`;

export const NextButtonDiv = tw.div`
inline absolute left-20 md:left-44
`;

export const NextButton = tw.button`
h-11 w-20 bg-[#339af0] rounded-lg md:hover:bg-[#1864ab]
`;

export const QuestionsContainer = tw.div`
h-80 w-80 bg-secondary rounded-lg shadow shadow-[#adb5bd] flex flex-col gap-8 p-4 md:w-128 md:h-60

`;

export const OptionsDiv = tw.div`
flex flex-col gap-2
`;

export const SubmitButtonDiv = tw.div`
inline absolute left-20 md:left-44
`;

export const SubmitButton = tw.button`
h-11 w-20 bg-primary rounded-lg hover:bg-secondary
`;

export const OptionsParagraph = tw.p`
flex gap-3 items-center cursor-pointer
`;

export const OptionsParagraphSpan = tw.span`
w-5 h-5 rounded-xl border-4 border-white
`;
