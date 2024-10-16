import { MainContainer } from './BaseComponents/MainContainer'
import { gameStore } from './Store/GameStore'
import LandingPage from './LandingPage'
import GamePage from './GamePage'

export default function MainComponent() {
    const gameStarted = gameStore.use.gameStarted()

    return (
        <MainContainer>
            {
                gameStarted ? 
                <GamePage/> :
                <LandingPage />
            }
        </MainContainer>
    )
}
