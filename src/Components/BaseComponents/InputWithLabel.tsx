import React, { HTMLAttributes } from 'react'
import { Stack } from './Stack'

export interface InputWithLabelProps extends HTMLAttributes<HTMLSpanElement> {
    input: JSX.Element
    label: string
}

export default function InputWithLabel(props: InputWithLabelProps) {
  return (
    <Stack direction='row' className='items-center' spacing={2}>
        <span {...props}>{props.label}</span>
        {props.input}
    </Stack>
  )
}
