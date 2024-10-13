import React, { useState } from 'react'
import { gameStore } from './Store/GameStore'
import { Stack } from './BaseComponents/Stack'
import MissionCard from './MissionCard'
import { Paper } from './BaseComponents/Paper'
import { SmallHeader } from './BaseComponents/SmallHeader'
import { Button } from './BaseComponents/Button'
import { PlayerInfo } from './Models/PlayerInfo'
import Card from './BaseComponents/Card'

export default function GamePage() {
  const missions = gameStore.use.missions()
  const difficulty = gameStore.use.difficulty()
  const endGame = gameStore.use.endGame()
  const isRegularPlayingCards = gameStore.use.isRegularPlayingCards()

  return (
    <Stack className='items-center w-3/4 z-10' spacing={3}>
      <Paper className='p-5'>
        <SmallHeader>Difficulty: {difficulty}</SmallHeader>
        <span className='text-center text-2xl'>Card Type: {isRegularPlayingCards ? "Regular Playing cards" : "Original Crew Cards"}</span>
      </Paper>
      <div className='flex justify-center flex-col w-full space-y-3 md:*:mt-3 md:space-x-3 md:flex-row md:flex-wrap'>
        {
          // missions.filter(m => m.type == 'trick_winning').map(m => <MissionCard mission={m} />)
          missions.filter(m => m.type == 'not_opening').map(m => <MissionCard mission={m} />)
          // missions.filter(m => m.type == 'even_odd').map(m => <MissionCard mission={m} />)
          // missions.filter(m => m.type == 'more_or_less').map(m => <MissionCard mission={m} />)
          // missions.filter(m => m.type == 'all_of_one').map(m => <MissionCard mission={m} />)
          // missions.filter(m => m.type == 'specific').map(m => <MissionCard mission={m} />)
        }
      </div>
      <Card suit='H' value='3' flipped />
      <Button onClick={endGame}>End Game</Button>
    </Stack>
  )
}
