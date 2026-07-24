export const urlTo = (path?: string) =>
  `${import.meta.env.BASE_URL}${path || ''}`
