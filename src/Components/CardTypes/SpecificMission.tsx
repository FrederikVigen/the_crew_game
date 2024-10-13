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
  const hasDuplicates = Array.from(new Set(specific_cards)).length - specific_cards.length != 0
  const position = props.mission.type_specifics?.position!
  console.log(hasDuplicates, specific_cards)

  const cardHeader = [
    'I', 'will',
    isNot && specific_cards.length > 1 ? 'not' : '',
    'win',
    isNot && specific_cards.length <= 1 ? 'no' : '',
    (isExactly && !isNot) ? ' exactly' : '',
    (specific_cards.length > 1 && !isExactly && hasDuplicates) ? ' at least' : ''
  ]

  const cardFooter = [
    position == "LAST" ? 'In the last trick': ''
  ]

  return (
    <Stack className='items-center'>
      <span className='mb-1'>{cardHeader.join(" ")}</span>
      <CardDisplayer displayBadge={specific_cards.every(c => c[1] == undefined || c == 'XS') && !isNot} cards={specific_cards} />
      <span>{cardFooter.join(" ")}</span>
    </Stack>
  )
}
