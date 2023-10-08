import IconButton from '@mui/material/IconButton'

import React, { type FunctionComponent, type MouseEventHandler } from 'react'

interface Props {
  statusButton: boolean
  iconOff: React.ComponentType
  iconOn: React.ComponentType
  onClick?: MouseEventHandler
}

const ButtonIcon: FunctionComponent<Props> = React.memo(
  ({ statusButton, iconOn: IconOn, iconOff: IconOff, onClick }: Props) => {
    return (
      <IconButton data-testid="button-icon" onClick={onClick}>
        {statusButton ? <IconOn /> : <IconOff />}
      </IconButton>
    )
  }
)

ButtonIcon.displayName = 'ButtonIcon'

export default ButtonIcon
