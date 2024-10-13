import React, { useState } from 'react'
import { Mission } from './Models/Mission'
import { Paper } from './BaseComponents/Paper'
import { gameStore } from './Store/GameStore'
import { Stack } from './BaseComponents/Stack'
import { Divider } from './BaseComponents/Divider'
import { PlayerInfo } from './Models/PlayerInfo'
import { Button } from './BaseComponents/Button'
import SpecificMission from './CardTypes/SpecificMission'

export interface MissionCardProps {
    mission: Mission
}

export default function MissionCard(props: MissionCardProps) {
    const players = gameStore.use.players()
    const [selectedPlayer, setSelectedPlayer] = useState<PlayerInfo | undefined>(undefined)
    const isRegularPlayingCards = gameStore.use.isRegularPlayingCards()


    const cardElements : {[key: string] : JSX.Element} = {
        'trick_winning': <></>,
        'more_or_less': <></>,
        'specific': <SpecificMission mission={props.mission}/>,
        'even_odd': <></>,
        'all_of_one': <></>,
        'not_opening': <></>,
        'using': <></>
    } 


    return (
        <Paper className='w-full md:w-[175px] h-[350px]'>
            {/* <div>Mission Difficulty: {props.mission.difficulties[players.length - 3]}</div> */}
            <Stack className='w-full md:h-2/3'>
                {cardElements[props.mission.type]}
                {/* <div>{props.mission.cardText}</div> */}
            </Stack>
            <Divider className='mt-1 mb-1'/> 
            <Stack className='w-full'>
                {
                    selectedPlayer ?
                    <Stack direction='row' className='justify-center items-center space-x-3'>
                        <span className='underline'>{selectedPlayer.name}</span> 
                        <Button size='small' onClick={() => setSelectedPlayer(undefined)}>Change</Button>
                    </Stack> :
                    players.map((p, i) => <span key={i} className='cursor-pointer hover:underline' onClick={() => setSelectedPlayer(p)}>{p.name}</span>)
                }
            </Stack>
        </Paper>
    )
}
