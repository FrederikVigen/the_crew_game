import Card from "./BaseComponents/Card"
import { translateCard } from "./Services/PlayingCardTranslator"

export interface CardDisplayer {
  cards: string[]
  displayBadge?: boolean
}

export default function CardDisplayer(props: CardDisplayer) {
  let cardCount: { [key: string]: number } = {}
  props.cards.forEach(v => {
    cardCount[v] = (cardCount[v] ?? 0) + 1
  })

  const totalCardsToDisplay = Object.keys(cardCount).length
  const rotation: number[] | undefined = {
    0: [],
    1: [0],
    2: [-12.5, 12.5],
    3: [0, 0, 0],
    4: [0, 0, 0, 0],
    5: [0, 0, 0, 0, 0]
  }[totalCardsToDisplay]

  const translation: number[] | undefined = {
    0: [],
    1: [0],
    2: [-15, 15],
    3: [-20, 0, 20],
    4: [-30, -10, 10, 30],
    5: [-35, -17.5, 0, 17.5, 35]
  }[totalCardsToDisplay]

  const badgePosition: string[][] | undefined = {
    0: [],
    1: [['-10px', '25%']],
    2: [['-15px', '35%'], ['90px', '35%']],
    3: [['-15px', '35%'], ['0px', '0px'], ['90px', '35%']],
    4: [['90px', '35%'], ['90px', '35%'], ['90px', '35%'],[ '90px', '35%']]
  }[totalCardsToDisplay]

  return (
    <div className="relative w-[90px] h-[140px]">
      {
        Object.keys(cardCount).map((key, i) => {
          const translatedCard = translateCard(key)
          const count = cardCount[key]
          return (
            <>
              {
                (count > 1 || props.displayBadge) &&
                <span style={{
                  top: badgePosition![i][1],
                  left: badgePosition![i][0]
                }} className="ring-2 ring-black absolute z-10 p-1 bg-orange-400 rounded-xl">{count}x</span>
              }
              <Card className="!absolute" style={{
                transform: `rotate(${rotation![i]}deg) translate(${translation![i]}px)`
              }} key={i} width="100%" height="100%" suit={translatedCard[0]} value={translatedCard[1]} />
            </>
          )
        })
      }
    </div>
  )
}
