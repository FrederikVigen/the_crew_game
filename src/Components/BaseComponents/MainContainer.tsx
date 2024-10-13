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
    before:bg-[url('./assets/background.svg')]
    before:absolute
    before:-z-10
    before:scale-x-[-1]
    before:opacity-30
    before:bg-[length:40%]
    before:rotate-[30deg]
    before:bg-top
    before:w-[1000vh]
    before:h-[100%]
    before:bg-no-repeat
    after:content-['']
    after:absolute
    after:w-full
    after:h-full
    after:-z-20
    after:from-slate-900
    after:bg-sky-700
    after:bg-gradient-to-t
`
