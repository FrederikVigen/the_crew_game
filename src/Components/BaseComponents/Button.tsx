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
  ${p => p.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
  ${p => p.disabled ? 'opacity-70' : 'opacity-100'}
`