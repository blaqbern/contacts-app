import * as React from 'react'

import * as styles from './input.styles'

interface InputProps {
  fieldName: string
  value: string
  onChange?(event: React.SyntheticEvent<HTMLInputElement>): void
  readonly?: boolean
}

export const Input: React.SFC<InputProps> = ({
  fieldName,
  value,
  onChange,
  readonly,
}) => {
  const label = fieldName.replace(/(^\w)/, match => match.toUpperCase())
  return (
    <span className={styles.input}>
      <label>{`${label}:`}</label>
      {readonly
        ? <span className="value">{value}</span>
        : <input name={fieldName} value={value} onChange={onChange} />
      }
    </span>
  )
}
