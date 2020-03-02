import React from 'react'
import { StyledButton } from './button.style'

const Button = ({ onClick, label = 'helloagain', children }) => {
  return (
  <StyledButton
    onClick={onClick}
    label={label}
    data-testid="nice-button">
      <span>{label}</span>
      {children}
    </StyledButton>
  )
}


export { Button }