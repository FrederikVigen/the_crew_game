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
  const resetGame = gameStore.use.resetGame()
  const startGame = gameStore.use.startGame()
  // const isRegularPlayingCards = gameStore.use.isRegularPlayingCards()

  return (
    <Stack className='items-center w-3/4 z-10' spacing={3}>
      <Paper className='p-5'>
        <SmallHeader>Difficulty: {difficulty}</SmallHeader>
        {/* <span className='text-center text-2xl'>Card Type: {isRegularPlayingCards ? "Regular Playing cards" : "Original Crew Cards"}</span> */}
      </Paper>
      <div className='flex justify-center flex-col w-full space-y-3 md:*:mt-3 md:space-x-3 md:flex-row md:flex-wrap'>
        {
          missions.map(m => <MissionCard mission={m} />)
        }
      </div>
      <Stack direction='row' spacing={3}>
        <Button onClick={endGame}>End Game</Button>
        <Button onClick={resetGame}>Reset Game</Button>
        <Button onClick={startGame}>Draw new mission cards</Button>
      </Stack>
    </Stack>
  )
}
