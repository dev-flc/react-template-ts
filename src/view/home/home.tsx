import React, { useState } from 'react'

import { actionSetModeIsDark } from 'Actions/actionsTheme'
import { actionSetTitle } from 'Actions/actionSetTitle'

import { convertTextUpperOrLower } from 'Utils/utils'
import { useStore } from 'Hook/store/useStore'

import imageEslint from 'Images/eslint.svg'
import imagePrettier from 'Images/prettier.svg'
import imageReact from 'Images/react.svg'
import imageRedux from 'Images/redux.svg'
import imageSass from 'Images/sass.svg'
import imageWebpack from 'Images/webpack.svg'

import ButtonIcon from 'Components/buttonIcon/buttonIcon'
import { MODE_PALETTE } from 'Constants/theme/themeMui'

import Container from '@mui/material/Container'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import TextRotateUpIcon from '@mui/icons-material/TextRotateUp'
import TextRotateVerticalIcon from '@mui/icons-material/TextRotateVertical'
import Typography from '@mui/material/Typography'

const Home = React.memo(() => {
  const [mapStateToProps, mapDispatchToProps] = useStore()
  const [isUpperCase, setIsUpperCase] = useState(false)
  const { title, theme } = mapStateToProps
  const { paletteMode } = theme

  const handleThemeMode = (): void => {
    const mode =
      paletteMode === MODE_PALETTE.DARK ? MODE_PALETTE.LIGHT : MODE_PALETTE.DARK

    mapDispatchToProps(actionSetModeIsDark(mode))
  }

  const handleConvertText = (): void => {
    const [text, status] = convertTextUpperOrLower(title) as [string, boolean]
    setIsUpperCase(status)
    mapDispatchToProps(actionSetTitle(text))
  }

  return (
    <Container maxWidth="sm" fixed>
      <div className="container">
        <div className="sub-section">
          <Typography variant="h1" component="h1">
            {title}
          </Typography>
        </div>
        <div className="sub-section">
          <img src={imageReact} className="image image-animation" alt="React" />
          <img src={imageRedux} className="image image-animation" alt="Redux" />
          <img src={imageSass} className="image" alt="Sass" />
          <img src={imagePrettier} className="image" alt="Prettier" />
          <img
            src={imageEslint}
            className="image image-animation"
            alt="Eslint"
          />
          <img
            src={imageWebpack}
            className="image image-animation"
            alt="Webpack"
          />
        </div>
        <div>
          <ButtonIcon
            statusButton={isUpperCase}
            onClick={handleConvertText}
            iconOn={TextRotateUpIcon}
            iconOff={TextRotateVerticalIcon}
          />

          <ButtonIcon
            statusButton={paletteMode === MODE_PALETTE.DARK}
            onClick={handleThemeMode}
            iconOn={LightModeIcon}
            iconOff={DarkModeIcon}
          />
        </div>
      </div>
    </Container>
  )
})

Home.displayName = 'Home'

export { Home }
