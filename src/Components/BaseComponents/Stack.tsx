import { PropsWithChildren } from "react";
import tw from "tailwind-styled-components";

export interface StackProps {
    spacing?: number
    direction?: 'row' | 'col'
}

export const Stack = tw.div<StackProps>`
    flex
    justify-center
    ${p => p.direction == 'row' ? 'flex-row' : 'flex-col'}
    ${p => p.direction == 'row' ? `space-x-${p.spacing}` : `space-y-${p.spacing}`}
`