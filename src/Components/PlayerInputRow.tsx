import React from 'react'
import { Stack } from './BaseComponents/Stack'
import { Input } from './BaseComponents/Input'
import { PlayerInfo } from './Models/PlayerInfo'
import { gameStore } from './Store/GameStore'
import { CameraIcon, MinusCircleIcon, MinusIcon, XMarkIcon } from '@heroicons/react/24/outline'

export interface PlayerInputRowProps {
    index: number
    playerInfo: PlayerInfo
}

export default function PlayerInputRow(props: PlayerInputRowProps) {
    const updatePlayerInfo = gameStore.use.updatePlayerInfo()
    const removePlayer = gameStore.use.removePlayer()

    return (
        <Stack direction='row' spacing={2}>
            <Input value={props.playerInfo.name}
                   onChange={(e) => updatePlayerInfo(props.index, { ...props.playerInfo, name: e.target.value })}
                   placeholder='Player name'
                   className='text-center' />
            <Stack>
                {props.index > 2 &&
                    <XMarkIcon onClick={() => removePlayer(props.index)} className='size-6 cursor-pointer text-red-500' />
                }
            </Stack>
        </Stack>
    )
}
