// convertTextUpperOrLower
export const convertTextUpperOrLower = ( text : string ) => [
  text === text.toUpperCase()
    ? text.toLowerCase() || text === text.toLowerCase()
    : text.toUpperCase(),
  text === text.toUpperCase()
]