import React from 'react'

import PropTypes from 'prop-types'

const ContainerGlobal = React.memo(( { children } : {children: React.ReactNode} ) => <div> { children } </div>)

ContainerGlobal.displayName = 'ContainerGlobal'

export { ContainerGlobal }
