import { allMissions } from "../../Data/AllMissions";
import { Mission } from "../Models/Mission";

export interface GameService {
    generateRandomElementsUntilMaxSum: (difficulty: number, amountOfPlayers: number) => Mission[]
}

// Function to generate a random element from the list
function getRandomElement(missionsToPickFrom: Mission[]) {
    const randomIndex = Math.floor(Math.random() * missionsToPickFrom.length);
    return missionsToPickFrom[randomIndex];
}

export const gameService: GameService = {
    generateRandomElementsUntilMaxSum: (difficulty: number, amountOfPlayers: number) => {
        let copyOfAllMissions = JSON.parse(JSON.stringify(allMissions)) as Mission[]
        let pickedElements = [];
        let sum = 0;
        while (sum < difficulty) {
            let element = getRandomElement(copyOfAllMissions);
            if (sum + element.difficulties[amountOfPlayers] > difficulty) {
                continue; // Stop if adding the next element exceeds the threshold
            }
            pickedElements.push(element);
            sum += element.difficulties[amountOfPlayers];
            copyOfAllMissions = copyOfAllMissions.filter((el) => el !== element); // Remove picked element from the list
            if (copyOfAllMissions.length === 0) {
                break; // Break if all elements have been picked
            }
        }
        return pickedElements;
    },
}