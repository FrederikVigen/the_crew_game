import { create } from "zustand"
import { PlayerInfo } from "../Models/PlayerInfo"
import { produce } from "immer"
import { StoreApi, UseBoundStore } from 'zustand'

interface GameState {
    players: PlayerInfo[]
    addPlayer: (newPlayer: PlayerInfo) => void
    updatePlayerInfo: (index: number, updatedPlayerInfo: PlayerInfo) => void
    removePlayer: (index: number) => void
    gameStarted: boolean
    error: string
    startGame: () => void
}

const useGameStore = create<GameState>((set) => ({
    players: [
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        }
    ],
    error: "",
    gameStarted: false,
    addPlayer: (newPlayer: PlayerInfo) => set(produce((state: GameState) => {
        if(state.players.length >= 5) {
            return
        }
        state.players = [...state.players, newPlayer]
    })),
    updatePlayerInfo: (index: number, updatedPlayerInfo: PlayerInfo) => set(produce((state: GameState) => {
        state.error = ""
        state.players[index] = updatedPlayerInfo
    })),
    removePlayer: (index: number) => set(produce((state: GameState) => {
        state.players.splice(index, 1)
    })),
    startGame: () => set(produce((state: GameState) => {
        if(state.players.filter(p => p.name == '').length > 0) {
            state.error = "Please make sure all players have a name"
            return
        }
        state.gameStarted = true
    }))
}))


type WithSelectors<S> = S extends { getState: () => infer T }
? S & { use: { [K in keyof T]: () => T[K] } }
: never

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
    _store: S,
) => {
    let store = _store as WithSelectors<typeof _store>
    store.use = {}
    for (let k of Object.keys(store.getState())) {
        ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
    }
    
    return store
}

export const gameStore = createSelectors(useGameStore)