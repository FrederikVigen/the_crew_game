import React from 'react'
import { gameStore } from './Store/Store'
import { Stack } from './BaseComponents/Stack'

export default function GamePage() {
  const players = gameStore.use.players()
  
  return (
    <Stack>
      <div>GamePage</div>
      <div>Players:</div>
      {
        players.map(p => 
          <div>{p.name}</div>
        )
      }
    </Stack>
  )
}
