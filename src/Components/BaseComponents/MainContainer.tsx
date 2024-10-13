import tw from "tailwind-styled-components";

export const MainContainer = tw.div `
    flex
    relative
    overflow-hidden
    text-white 
    h-full
    min-h-screen 
    justify-center 
    items-center
    pt-5
    pb-5
    before:bg-no-repeat
    before:bg-[url('./assets/background.svg')]
    before:!bg-[length:150%]
    before:absolute
    before:w-[200%]
    before:h-[200%]
    before:top-[-50%]
    before:left-[-50%]
    before:-z-10
    before:rotate-[30deg]
    before:scale-x-[-1]
    before:opacity-30
    after:content-['']
    after:absolute
    after:w-full
    after:h-full
    after:-z-20
    after:from-slate-900
    after:bg-sky-700
    after:bg-gradient-to-t
`