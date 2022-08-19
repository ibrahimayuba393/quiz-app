import tw from "tailwind-styled-components";

export const Container = tw.div`
w-full h-screen bg-[#99928a] flex justify-center
`;

export const SubContainer = tw.div`
mt-44 flex flex-col gap-6 items-center
`;

export const Header = tw.h1`
uppercase font-pacifico text-xl
`;

export const ButtonContainer = tw.div`
mt-5
`;

export const Button = tw.button`
h-11 w-36 bg-[#20c997] rounded-lg hover:bg-secondary
`;
