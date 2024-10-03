import { AcademicCapIcon, CheckIcon } from '@heroicons/react/24/outline'
import React, { cloneElement } from 'react'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: JSX.Element
    size?: number
}

export default function Checkbox(props: CheckboxProps) {
    const icon_classes = `pointer-events-none size-${props.size ?? 5} absolute hidden peer-checked:block`
    // <AcademicCapIcon className='pointer-events-none size-4 ml-0.5 mt-0.5 absolute hidden peer-checked:block' />
    return (
        <div className='flex gap-2'>
            <input {...props} type='checkbox' className={`relative shrink-0 size-${props.size ?? 5} peer appearance-none checked:bg-blue-400 bg-white rounded`} />
            {
                props.icon ?
                cloneElement(props.icon, {className: icon_classes}) :
                <CheckIcon className={icon_classes} />
            }
        </div>
    )
}
