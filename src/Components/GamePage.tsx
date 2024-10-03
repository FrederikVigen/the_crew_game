import React, { useState } from 'react'
import { gameStore } from './Store/GameStore'
import { Stack } from './BaseComponents/Stack'
import MissionCard from './MissionCard'
import { Paper } from './BaseComponents/Paper'
import { SmallHeader } from './BaseComponents/SmallHeader'
import { Button } from './BaseComponents/Button'
import { PlayerInfo } from './Models/PlayerInfo'

export default function GamePage() {
  const missions = gameStore.use.missions()
  const difficulty = gameStore.use.difficulty()
  const endGame = gameStore.use.endGame()

  return (
    <Stack className='items-center w-3/4' spacing={3}>
      <Paper className='p-5'>
        <SmallHeader>Difficulty: {difficulty}</SmallHeader>
      </Paper>
      <div className='flex justify-center flex-col w-full space-y-3 md:*:mt-3 md:space-x-3 md:flex-row md:flex-wrap'>
        {
          missions.map((m, i) => <MissionCard key={i} mission={m} />)
        }
      </div>
      <Button onClick={endGame}>End Game</Button>
    </Stack>
  )
}
