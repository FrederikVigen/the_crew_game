import React from 'react'
import { Mission } from '../Models/Mission'
import { Stack } from '../BaseComponents/Stack'
import CardDisplayer from '../CardDisplayer'

export interface NotOpeningMissionProps {
    mission: Mission

}

export default function NotOpeningMission(props: NotOpeningMissionProps) {
    const cards = props.mission.type_specifics?.specific_cards!

    return (
        <Stack className='items-center'>
            <span>open with</span>
            <div>
                <CardDisplayer cards={cards} />
            </div>
        </Stack>
    )
}
