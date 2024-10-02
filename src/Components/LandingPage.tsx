import React from 'react'
import { Paper } from './BaseComponents/Paper'
import { Stack } from './BaseComponents/Stack'
import { BigHeader } from './BaseComponents/BigHeader'
import { SmallHeader } from './BaseComponents/SmallHeader'
import PlayerInputRow from './PlayerInputRow'
import { gameStore } from './Store/Store'
import { Button } from './BaseComponents/Button'

export default function LandingPage() {
    const players = gameStore.use.players()
    const addPlayer = gameStore.use.addPlayer()
    const startGame = gameStore.use.startGame()
    const error = gameStore.use.error()

    return (
        <Paper className='p-5'>
            <Stack className='mb-5'>
                <BigHeader>The Crew</BigHeader>
                <SmallHeader>Mission Deep Sea</SmallHeader>
            </Stack>
            <Stack spacing={3}>
                {
                    players.map((p, i) => <PlayerInputRow key={i} index={i} playerInfo={p} />)
                }
                <Stack spacing={2} direction='row'>
                    <Button disabled={players.length >= 5} onClick={() => addPlayer({ name: '' })}>Add Player</Button>
                    <Button onClick={() => startGame()}>Start Game</Button>
                </Stack>
                { error != "" &&
                    <span className='text-red-500'>{error}</span>
                }
            </Stack>
        </Paper>
    )
}
