import tw from "tailwind-styled-components";

export const MainDiv = tw.div`
bg-[#99928a] w-full flex flex-col items-center mb-10
`;

export const Container = tw.div`
bg-secondary w-72 flex flex-col items-center my-2 pb-4 rounded-lg text-sm md:w-128
`;

export const AnswerContainer = tw.div`
 w-80 h-52 mt-4 rounded-2xl shadow-lg md:border-2 md:border-black p-2 md:w-120 md:h-44 pointer-events-none
`;

export const QuestionParagraph = tw.p`
mb-4
`;

export const OptionsDiv = tw.div`
flex flex-col gap-2 relative
`;

export const Option = tw.p`
flex gap-3 items-center cursor-pointer
`;

export const OptionSpan = tw.span`
w-5 h-5 rounded-xl border-4 border-white
`;

export const CorrectAnswer = tw.p`
absolute right-2 bottom-0 md:right-10
`;

export const ButtonDiv = tw.div`
md:mt-5
`;

export const Button = tw.button`
h-11 w-36 bg-[#20c997] rounded-lg hover:bg-secondary md:ml-90
`;
