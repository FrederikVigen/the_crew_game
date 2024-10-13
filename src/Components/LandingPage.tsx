import React from 'react'
import { Paper } from './BaseComponents/Paper'
import { Stack } from './BaseComponents/Stack'
import { BigHeader } from './BaseComponents/BigHeader'
import { SmallHeader } from './BaseComponents/SmallHeader'
import PlayerInputRow from './PlayerInputRow'
import { gameStore } from './Store/GameStore'
import { Button } from './BaseComponents/Button'
import { Divider } from './BaseComponents/Divider'
import { Input } from './BaseComponents/Input'
import Checkbox from './BaseComponents/Checkbox'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import InputWithLabel from './BaseComponents/InputWithLabel'

export default function LandingPage() {
    const players = gameStore.use.players()
    const addPlayer = gameStore.use.addPlayer()
    const startGame = gameStore.use.startGame()
    const error = gameStore.use.error()
    const difficulty = gameStore.use.difficulty()
    const updateDifficulty = gameStore.use.updateDifficulty()
    const setIsRegularPlayingCards = gameStore.use.setIsRegularPlayingCards()
    const isRegularPlayingCards = gameStore.use.isRegularPlayingCards()

    return (
        <Paper className='h-1/3 flex flex-col p-10 md:w-1/3 justify-center bg-slate-700/70 rounded-lg'>
            <Stack className='mb-5'>
                <BigHeader>The Crew</BigHeader>
                <SmallHeader>Mission Deep Sea</SmallHeader>
            </Stack>
            <Stack spacing={3} className='items-center'>
                {
                    players.map((p, i) => <PlayerInputRow key={i} index={i} playerInfo={p} />)
                }
                <Divider className='w-1/2' />
                <InputWithLabel
                    label='Difficulty'
                    input={<Input value={difficulty} onChange={(e) => updateDifficulty(Number(e.target.value))} className='text-center' type='number' placeholder='Difficulty' min='1' max='30' />}
                />
                <Divider className='w-1/2' />
                <InputWithLabel
                    label='Play with regular card game'
                    input={<Checkbox checked={isRegularPlayingCards} onChange={(e) => setIsRegularPlayingCards(e.target.checked)} icon={<Cog6ToothIcon />} />}
                />
                <Stack spacing={2} direction='row'>
                    <Button disabled={players.length >= 5} onClick={() => addPlayer({ name: '' })}>Add Player</Button>
                    <Button onClick={() => startGame()}>Start Game</Button>
                </Stack>
                {error != "" &&
                    <span className='text-red-500 text-center'>{error}</span>
                }
            </Stack>
        </Paper>
    )
}
