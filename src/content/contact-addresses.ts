export const publicContactEmails = {
  general: 'info@velvoix.com',
  privacy: 'info@velvoix.com',
} as const;

export function normalizePublicContactCopy(value: string): string {
  return value
    .replaceAll('founder@velvoix.com', publicContactEmails.general)
    .replaceAll('support@velvoix.com', publicContactEmails.privacy);
}
