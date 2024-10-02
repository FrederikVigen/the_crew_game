import tw from "tailwind-styled-components";

export const Button = tw.button`
  bg-cyan-600
  p-2
  uppercase
  rounded
  flex
  justify-center
  items-center
  ${p => p.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
  ${p => p.disabled ? 'opacity-70' : 'opacity-100'}
`