import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'
interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'blue',
  danger: 'red',
  success: 'green',
}
export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${(props) => props.theme['green-500']};
  height: 40px;
  width: 100px;

  /*
    ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}
    */
`