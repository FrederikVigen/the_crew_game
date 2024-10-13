import React from 'react'
import { Mission } from '../Models/Mission'
import { Stack } from '../BaseComponents/Stack'
import CardDisplayer from '../CardDisplayer'
import { gameStore } from '../Store/GameStore'
import { translateCard } from '../Services/PlayingCardTranslator'
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline'

export interface MoreLessProps {
    mission: Mission
}

export default function MoreLess(props: MoreLessProps) {
    const left = props.mission.type_specifics?.left
    const right = props.mission.type_specifics?.right
    const comparisson = props.mission.type_specifics?.comparisson
    const players = gameStore.use.players()
    const correctRight = right && (right?.length == 1 ? right[0] : right[players.length - 3])
    const inOneTrick = props.mission.type_specifics?.in_one_trick
    const translatedRight = correctRight && 'YGBP'.includes(correctRight.toString()) ? translateCard(correctRight.toString()) : correctRight
    const translatedLeft = left && 'YGBP'.includes(left.toString()) ? translateCard(left.toString()) : left
    const differentSpelling = props.mission.type_specifics?.different_spelling

    const textElements: { [key: string | number]: string } = {
        "I": "tricks",
        "COMMANDER": "the commander",
        "ANYONE": "anyone",
        "ANYONE_COMBINED": "anyone combined",
        "Y": "yellow",
        "B": "blue",
        "G": "green",
        "P": "pink",
        "S": "spades",
        "H": "hearts",
        "C": "clubs",
        "D": "diamonds",
        "SUM": "the sum is",
        "ALL_CARDS": "all cards are",
        "22/23": "22 or 23",
    }

    const comparissonElements: { [key: string]: string[] } = {
        '<': ['less', 'than'],
        '>': ['more', 'than'],
        '=': ['as many', 'as']
    }

    const contentText = 
    
    translatedLeft && translatedRight && comparisson &&
    (differentSpelling ?
        [(inOneTrick ? 'a trick where': ''),textElements[translatedLeft], comparissonElements[comparisson][0], comparissonElements[comparisson][1], isNaN(Number(translatedRight)) ? textElements[translatedRight] : translatedRight]
        : 
        [(inOneTrick ? 'a trick with' : ''), comparissonElements[comparisson][0], textElements[translatedLeft], comparissonElements[comparisson][1], textElements[translatedRight]]
    )

    return (
        <Stack>
            {
                contentText &&
                <span className='text-2xl'>{contentText.join(" ")}</span>
            }
            {
                left && 'YBGP'.includes(left) && correctRight && 'YBGP'.includes(correctRight.toString()) &&
                <Stack direction='row' className='justify-center items-end' spacing={4}>
                    <CardDisplayer size='md' cards={[left]}/>
                    <CardDisplayer size={comparisson == '=' ? 'md' : 'sm'} cards={[correctRight.toString()]}/>
                </Stack>
            }
        </Stack>
    )
}
