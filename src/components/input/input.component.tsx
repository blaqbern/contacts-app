import * as React from 'react'

import * as styles from './input.styles'

interface InputProps {
  fieldName: string
  value: string
  onChange(event: React.SyntheticEvent<HTMLInputElement>): void
}

export const Input: React.SFC<InputProps> = ({
  fieldName,
  value,
  onChange
}) => {
  return (
    <span className={styles.input}>
      <label>{`${fieldName}:`}</label>
      <input
        name={fieldName}
        value={value}
        onChange={onChange}
      />
    </span>
  )
}
