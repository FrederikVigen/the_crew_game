export const translateCard = (originalCardName: string): string => {
    const playingCard =
        originalCardName
            .replace("S1", "ST")
            .replace("S2", "SJ")
            .replace("S3", "SQ")
            .replace("S4", "SK")
            .replace("1", "A")
            .replace("P", "H")
            .replace("Y", "S")
            .replace("B", "D")
            .replace("G", "C")
    return playingCard
} 