import tw from "tailwind-styled-components";

export interface ButtonProps {
  size?: 'small' | 'medium'
}

export const Button = tw.button<ButtonProps>`
  bg-cyan-600
  ${p => p.size == 'small' ? 'p-1' : 'p-2'}
  ${p => p.size == 'small' ? 'text-sm' : 'text-base'}
  uppercase
  rounded
  flex
  justify-center
  items-center
  hover:bg-cyan-700
  hover:ease-in
  transition
  duration-150
  focus:ring
  focus:ring-offset
  focus:ring-cyan-900
  ${p => p.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
  ${p => p.disabled ? 'opacity-70' : 'opacity-100'}
`