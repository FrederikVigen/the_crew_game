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
  const isNot = props.mission.type_specifics?.not_win!
  const position = props.mission.type_specifics?.position!

  return (
    <Stack className='items-center'>
      <CardDisplayer displayBadge={specific_cards.every(c => c[1] == undefined || c == 'XS') && !isNot} cards={specific_cards} />
      {position == "LAST" && <span>In the last trick</span>}
    </Stack>
  )
}
