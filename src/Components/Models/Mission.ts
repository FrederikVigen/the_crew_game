export interface Mission {
    difficulties: number[]
    cardText: string
    type: 'trick_winning' | 'more_or_less' | 'specific' | 'even_odd' | 'all_of_one' | 'not_opening' | 'using'
    type_specifics?:  {
        amount_of_tricks?: number | null
        exactly?: boolean
        in_row?: boolean
        position?: 'FIRST' | 'LAST' | 'FIRSTLAST' | null
        not_win?: boolean
        extra_info?: string
        left?: string
        right?: string | number | number[]
        comparisson?: string
        in_one_trick?: boolean
        specific_cards?: string[]
        is_even?: boolean
    }
}