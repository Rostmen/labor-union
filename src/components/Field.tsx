import React, { useCallback, SyntheticEvent, ReactElement, useState } from 'react'

// Option1: go from minimum, and define new props when you need them
type MinFildProps = {
  value?: string
  onChange?: (value: string, e: SyntheticEvent) => void
  type:
    | 'submit'
    | 'text'
    | 'password'
    | 'number'
    | 'add_more_when_you_need_to'
    | 'maybe_you_would_decide_to_create_a_separate_field_component_for_password-)'
}
export const MinField = ({ onChange, value = '', type }: MinFildProps): ReactElement => {
  const [inValue, setValue] = useState(value)
  const handleChange = useCallback(
    e => {
      setValue(e.target.value)
      onChange && onChange(inValue, e)
    },
    [inValue, setValue, onChange],
  )

  return <input onChange={handleChange} value={inValue} type={type} />
}

// Option1: go from minimum, and define new props when you need them
// this is a bit ugly - because it's "too detailed here"
// I'd go with minimalistic Field, but just showing you how to mess with these
// generics if you ever need to. prefer not to :)
type OptFildProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const OptField = (props: OptFildProps): ReactElement => {
  // props. <-- if you ctrl + space here, you'll see all the props of HTMLInputElement
  const { onChange, type } = props
  const handleChange = useCallback(e => onChange(e.target.value), [onChange])
  return <input onChange={handleChange} value={props.value} type={type} />
}
