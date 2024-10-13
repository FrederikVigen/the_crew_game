import React from 'react'
import { Mission } from '../Models/Mission'
import { Stack } from '../BaseComponents/Stack'

export interface TrickWinningMissionProps {
  mission: Mission
}

export default function TrickWinningMission(props: TrickWinningMissionProps) {
  const amountOfTricks = props.mission.type_specifics?.amount_of_tricks!
  const position = props.mission.type_specifics?.position
  const cardFooter = [
    {}
  ]

  const centerText = {
    'FIRST': amountOfTricks != 1 ? `the first ${amountOfTricks ?? 'X'}` : 'the first',
    'LAST': 'the last',
    'FIRSTLAST': 'the first and the last',
  } 

  return (
    <Stack>
      <span className='text-3xl'>{position ? centerText[position] : amountOfTricks ?? 'X'}</span>
      <span className='text-xl'>{amountOfTricks != 1 ? 'tricks' : 'trick'}</span>
      {
        props.mission.type_specifics?.in_row &&
        <span className='text-xl'>in a row</span>
      }
    </Stack>
  )
}
