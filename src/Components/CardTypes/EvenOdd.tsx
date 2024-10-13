import { Mission } from '../Models/Mission'
import { Stack } from '../BaseComponents/Stack'
import CardDisplayer from '../CardDisplayer'

export interface EvenOddProps {
  mission: Mission
}

export default function EvenOdd(props: EvenOddProps) {
  const specific_cards = props.mission.type_specifics?.specific_cards!
  const isEven = props.mission.type_specifics?.is_even

  return (
    <Stack className='items-center'>
        <span className='text-md'>a trick with only {isEven ? 'even' : 'odd'} cards</span>
      <CardDisplayer cards={specific_cards} />
    </Stack>
  )
}
