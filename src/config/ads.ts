/**
 * Central AdSense config.
 * To activate: set enabled=true and replace clientId + slot ids.
 */
export const adsConfig = {
  enabled: false,
  clientId: 'ca-pub-XXXXXXXX',
  slotSidebar: 'SIDEBAR_SLOT_ID',
  slotFooter: 'FOOTER_SLOT_ID'
} as const;
