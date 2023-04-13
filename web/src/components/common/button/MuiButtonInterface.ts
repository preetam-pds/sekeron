import { ButtonProps } from "@mui/material"

export interface StyledMuiButton {
  className?: string
}

export interface MuiButtonProps extends ButtonProps {
  width: string
  isDisabled: boolean
  size?: 'small' | 'medium' | 'large'
  label: string
  handleClick: () => void
  isOutlined?: boolean
}
