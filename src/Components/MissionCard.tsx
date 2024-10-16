import React, { useState } from 'react'
import { Mission } from './Models/Mission'
import { Paper } from './BaseComponents/Paper'
import { gameStore } from './Store/GameStore'
import { Stack } from './BaseComponents/Stack'
import { Divider } from './BaseComponents/Divider'
import { PlayerInfo } from './Models/PlayerInfo'
import { Button } from './BaseComponents/Button'
import SpecificMission from './CardTypes/SpecificMission'
import TrickWinningMission from './CardTypes/TrickWinningMission'
import EvenOdd from './CardTypes/EvenOdd'
import MoreLess from './CardTypes/MoreLess'
import NotOpeningMission from './CardTypes/NotOpeningMission'
import UsingMission from './CardTypes/UsingMission'

export interface MissionCardProps {
    mission: Mission
}

export default function MissionCard(props: MissionCardProps) {
    const players = gameStore.use.players()
    const isRegularPlayingCards = gameStore.use.isRegularPlayingCards()
    const specific_cards = props.mission.type_specifics?.specific_cards ?? []
    const isExactly = props.mission.type_specifics?.exactly!
    const isNot = props.mission.type_specifics?.not_win!
    const hasDuplicates = Array.from(new Set(specific_cards)).length - specific_cards.length != 0
    const position = props.mission.type_specifics?.position!
    const inRow = props.mission.type_specifics?.in_row
    const assignedPlayers = gameStore.use.assignedPlayers()
    const assignPlayer = gameStore.use.assignPlayer()
    const missionAssignedPlayer = assignedPlayers[props.mission.cardText]


    const cardElements: { [key: string]: JSX.Element } = {
        'trick_winning': <TrickWinningMission mission={props.mission} />,
        'more_or_less': <MoreLess mission={props.mission}/>,
        'specific': <SpecificMission mission={props.mission} />,
        'even_odd': <EvenOdd mission={props.mission}/>,
        'all_of_one': <span className='text-2xl'>All the cards in at least one of the 4 colors</span>,
        'not_opening': <NotOpeningMission mission={props.mission}/>,
        'using': <UsingMission mission={props.mission}/>
    }


    const cardHeader = [
        props.mission.type != 'using' ? 'I' : '',
        props.mission.type != 'using' ? 'will' : '',
        isNot && (specific_cards.length > 1 || inRow || props.mission.type == 'not_opening') ? (props.mission.type == 'trick_winning' ? 'never' : 'not') : '',
        props.mission.type == 'not_opening' || props.mission.type == 'using' ? '' : 'win',
        isNot && specific_cards.length <= 1 && !inRow ? (props.mission.type == 'trick_winning' ? 'none of' : 'no') : '',
        (isExactly && !isNot) ? ' exactly' : '',
        (specific_cards.length > 1 && !isExactly && hasDuplicates) ? ' at least' : ''
    ]


    return (
        <Paper className='w-full md:w-[175px]'>
            <Stack className='w-full md:h-[230px] text-center'>
                <span className='mb-1 text-xl'>{cardHeader.join(" ")}</span>
                {cardElements[props.mission.type]}
            </Stack>
            <Divider className='mt-1 mb-1' />
            <Stack className='w-full'>
                {
                    missionAssignedPlayer ?
                        <Stack direction='row' className='justify-center items-center space-x-3'>
                            <span className='underline'>{missionAssignedPlayer.name}</span>
                            <Button size='small' onClick={() => assignPlayer(undefined, props.mission)}>Change</Button>
                        </Stack> :
                        players.map((p, i) => <span key={i} className='cursor-pointer hover:underline' onClick={() => assignPlayer(p, props.mission)}>{p.name}</span>)
                }
            </Stack>
        </Paper>
    )
}
