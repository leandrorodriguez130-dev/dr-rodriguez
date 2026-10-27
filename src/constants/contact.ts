/**
 * Institutional contact information and configuration constants.
 * Centralized for site-wide consistency across buttons, links, and text.
 */

export const WHATSAPP_NUMBER = '543513209826';
export const WHATSAPP_DISPLAY = '351 320-9826';
export const WHATSAPP_TEL = `+${WHATSAPP_NUMBER}`;
export const WHATSAPP_DEFAULT_MESSAGE = 'Hola, me comunico desde la web. Me gustaría hacer una consulta.';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/leandro-facundo-rodriguez-1945a11b5/';
export const EMAIL_ADDRESS = 'dr.rodriguez.judicial@gmail.com';
export const LOCATION_DISPLAY = 'Cofico, Córdoba';
export const MATRICULA_DISPLAY = 'Mat. Prof. 1-45450';

/**
 * Generates a standard WhatsApp click-to-chat URL with the institutional number.
 * @param customMessage Optional pre-filled message (defaults to WHATSAPP_DEFAULT_MESSAGE)
 */
export const getWhatsAppUrl = (customMessage?: string): string => {
  const message = customMessage || WHATSAPP_DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
