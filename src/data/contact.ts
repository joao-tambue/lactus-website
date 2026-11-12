export const CONTACT_EMAIL = 'startuplactus@gmail.com'

export function mailtoLink(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
}
