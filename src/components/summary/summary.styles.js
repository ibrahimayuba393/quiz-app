import tw from "tailwind-styled-components";

export const MainContainer = tw.div`
bg-[#99928a]
`;

export const Container = tw.div`
bg-[#99928a] w-full my-5 flex flex-col items-center justify-center
`;

export const SubContainer = tw.div`
bg-secondary h-155 mt-6 mb-2 rounded-lg md:w-200 md:flex md:h-100 md:mt-24 md:gap-20
`;

export const ImageDiv = tw.div`

`;

export const Image = tw.img`
w-64 h-64 md:w-100 md:h-100 md:rounded-r-none md:rounded-l-lg
`;

export const SummaryContainer = tw.div`
mt-3
`;

export const SummaryHeading = tw.h2`
text-2xl text-center font-serif
`;

export const SummaryBody = tw.div`
flex flex-col gap-3 mt-2 p-3
`;

export const CorrectAnswerDiv = tw.div`
border-b border-black
`;

export const CorrectAnswerHeading = tw.h2`
uppercase font-medium text-sm mb-1
`;

export const CorrectAnswersNo = tw.p`
font-bold mb-1
`;

export const TotalCompletedDiv = tw.div`
border-b border-black
`;

export const TotalCompletedHeading = tw.h2`
uppercase font-medium text-sm mb-1
`;

export const TotalCompletedNo = tw.p`
font-bold mb-1
`;

export const UnansweredDiv = tw.div`
border-b border-black
`;

export const UnansweredHeading = tw.h2`
uppercase font-medium text-sm mb-1
`;

export const UnansweredNo = tw.p`
font-bold mb-1
`;

export const IncorrectAnswersDiv = tw.div`
border-b border-black
`;

export const IncorrectAnswersHeading = tw.h2`
uppercase font-medium text-sm mb-1
`;

export const IncorrectAnswersNo = tw.p`
font-bold mb-1
`;

export const SummaryButtonDiv = tw.div`
flex flex-col gap-8 mt-4 md:flex-row md:gap-100
`;

export const ReviewAnswersButton = tw.button`
h-11 w-36 bg-[#20c997] rounded-lg hover:bg-secondary
`;

export const ExitButton = tw.button`
h-11 w-36 bg-[#ff8787] rounded-lg hover:bg-secondary
`;
