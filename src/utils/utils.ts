// convertTextUpperOrLower
export const convertTextUpperOrLower = (text: string): any[] => [
  text === text.toUpperCase()
    ? text.toLowerCase()
    : text === text.toLowerCase()
    ? text.toUpperCase()
    : text,
  text === text.toUpperCase()
]
