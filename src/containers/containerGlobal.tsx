import React from 'react'

const ContainerGlobal = React.memo(
  ({ children }: { children: React.ReactNode }) => <div> {children} </div>
)

ContainerGlobal.displayName = 'ContainerGlobal'

export { ContainerGlobal }
