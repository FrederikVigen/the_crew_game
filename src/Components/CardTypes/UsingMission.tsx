import React from 'react'
import { Mission } from '../Models/Mission'
import { Stack } from '../BaseComponents/Stack'
import CardDisplayer from '../CardDisplayer'
import { translateCard } from '../Services/PlayingCardTranslator'

export interface UsingMissionProps {
    mission: Mission

}

export default function UsingMission(props: UsingMissionProps) {
    const cards = props.mission.type_specifics?.specific_cards!
    const left = props.mission.type_specifics?.left
    const right = props.mission.type_specifics?.right
    const translatedLeft = left && translateCard(left)
    const translatedRight = right && translateCard(right[0].toString())

    const preText = [
        'I will win',
        left == undefined ? 'a trick' : ''
    ]

    return (
        <Stack className='items-center'>
            <Stack direction='row' className='items-center'>
            <span>{preText.join(" ")}</span>
            {
                left &&
                    <CardDisplayer size='md' cards={[left]} />
            }
            </Stack>
            <Stack direction='row' className='items-center'>
                <span>using a</span>
                {
                    translatedRight &&
                    <CardDisplayer size='md' cards={[translatedRight]} />
                }
            </Stack>
        </Stack>
    )
}
