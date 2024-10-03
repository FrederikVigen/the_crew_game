import { create } from "zustand"
import { PlayerInfo } from "../Models/PlayerInfo"
import { produce } from "immer"
import { StoreApi, UseBoundStore } from 'zustand'
import { Mission } from "../Models/Mission"
import { gameService } from "../Services/GameService"


interface GameStore {
    players: PlayerInfo[]
    addPlayer: (newPlayer: PlayerInfo) => void
    updatePlayerInfo: (index: number, updatedPlayerInfo: PlayerInfo) => void
    removePlayer: (index: number) => void
    gameStarted: boolean
    error: string
    startGame: () => void
    difficulty: number
    updateDifficulty: (newDifficulty: number) => void
    missions: Mission[]
    endGame: () => void
}

const useGameStore = create<GameStore>((set) => ({
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
    missions: [],
    difficulty: 1,
    error: "",
    gameStarted: false,
    addPlayer: (newPlayer: PlayerInfo) => set(produce((state: GameStore) => {
        if(state.players.length >= 5) {
            return
        }
        state.players = [...state.players, newPlayer]
    })),
    updatePlayerInfo: (index: number, updatedPlayerInfo: PlayerInfo) => set(produce((state: GameStore) => {
        state.error = ""
        state.players[index] = updatedPlayerInfo
    })),
    removePlayer: (index: number) => set(produce((state: GameStore) => {
        state.players.splice(index, 1)
    })),
    startGame: () => set(produce((state: GameStore) => {
        if(state.players.filter(p => p.name == '').length > 0) {
            state.error = "Please make sure all players have a name"
            return
        }
        if(state.difficulty < 1 || state.difficulty > 30) {
            state.error = "Difficulty should be between 1 and 30"
            return
        }

        if(state.players.length - 3 < 0) {
            state.error = `Failed to start game with playercount being: ${state.players.length}`
            return
        }

        state.gameStarted = true
        state.missions = gameService.generateRandomElementsUntilMaxSum(state.difficulty, state.players.length - 3)
    })),
    updateDifficulty: (newDifficulty: number) => set(produce((state: GameStore) => {
        if(newDifficulty < 1 || newDifficulty > 30) {
            return
        }
        state.difficulty = newDifficulty
    })),
    endGame: () => set(produce((state: GameStore) => {
        state.players = Array.from(Array(3).keys()).map(_ => ({name: ''}))
        state.missions = []
        state.error = ""
        state.difficulty = 1
        state.gameStarted = false
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