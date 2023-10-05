import React from 'react'

import PropTypes from 'prop-types'

const ContainerGlobal = React.memo((props : object) => <div> { props.children } </div>)

ContainerGlobal.displayName = 'ContainerGlobal'

export { ContainerGlobal }
