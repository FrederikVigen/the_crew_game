import React, { HTMLProps } from 'react'
import { Deck } from '../Services/Deck'
import { access } from 'fs'

export interface CardProps extends HTMLProps<HTMLDivElement> {
    suit: string
    value?: string
    flipped?: boolean
    width?: string
    height?: string
}

export default function Card(props: CardProps) {
    const cardSvg = Deck[(props.value ?? '') + props.suit]
    const { className, style, ...propsWithNoClass } = props
    const xCards = [Deck[props.value + 'H'], Deck[props.value + 'C'], Deck[props.value + 'S'], Deck[props.value + 'D']]
    const newStyle = {
        ...style,
        width: `${props.width ?? '175px'}`,
        height: `${props.height ?? '175px'}`
    }
    return (
        <div {...propsWithNoClass} style={newStyle} className={className ? className + ' relative' : 'relative'}>
            {
                props.flipped &&
                <img src={Deck['1B']} className='w-full h-full' />
            }
            {
                props.suit == 'X' && !props.flipped &&
                xCards.map((s, i) => {
                    const top = i == 3 || i == 4 ? '50%' : '0'
                    const bottom = i == 1 || i == 2 ? '50%' : '0'
                    const right = i == 1 || i == 3 ? '50%' : '0'
                    const left = i == 2 || i == 4 ? '50%' : '0'
                    return (
                        <img key={i} className='absolute w-full h-full' style={{
                            clipPath: `inset(${top} ${right} ${bottom} ${left
                                })`
                        }} src={s} />
                    )
                })
            }
            {
                props.suit != 'X' && !props.flipped &&
                <img className='w-full h-full' src={cardSvg} />
            }
        </div>
    )
}
