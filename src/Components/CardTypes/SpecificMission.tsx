import React from 'react'
import { Mission } from '../Models/Mission'
import Card from '../BaseComponents/Card'
import { Stack } from '../BaseComponents/Stack'
import CardDisplayer from '../CardDisplayer'

export interface SpecificMissionProps {
  mission: Mission
}

export default function SpecificMission(props: SpecificMissionProps) {
  const specific_cards = props.mission.type_specifics?.specific_cards!
  const isExactly = props.mission.type_specifics?.exactly!
  const isNot = props.mission.type_specifics?.not_win!

  return (
    <Stack className='items-center'>
      <span className='mb-1'>I will win</span>
      <CardDisplayer displayBadge={specific_cards.every(c => c[1] == undefined) && !isNot} cards={specific_cards}/>
      <span>{props.mission.cardText}</span>
    </Stack>
  )
}
