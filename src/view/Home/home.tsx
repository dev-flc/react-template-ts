import React, { useState } from 'react'

import { actionSetModeIsDark } from './../../store/actions/actionsTheme'
import { actionSetTitle } from './../../store/actions/actionSetTitle'

import { convertTextUpperOrLower } from './../../utils/utils'
import { useStore } from './../../hook/store/useStore'

import imageEslint from './../../assets/images/eslint.svg'
import imagePrettier from './../../assets/images/prettier.svg'
import imageReact from './../../assets/images/react.svg'
import imageRedux from './../../assets/images/redux.svg'
import imageSass from './../../assets/images/sass.svg'
import imageWebpack from './../../assets/images/webpack.svg'

import { MODE_PALETTE } from './../../constants/theme/themeMui'

import ButtonIcon from './../../components/buttonIcon/buttonIcon'
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

  const handleThemeMode = () => {
    const mode =
      paletteMode === MODE_PALETTE.DARK ? MODE_PALETTE.LIGHT : MODE_PALETTE.DARK

    mapDispatchToProps(actionSetModeIsDark(mode))
  }

  const handleConvertText = () => {
    const [text, status] = convertTextUpperOrLower(title) as [string, boolean];
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
