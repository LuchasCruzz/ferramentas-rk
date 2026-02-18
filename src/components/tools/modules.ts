export type ModuleKey = 'hunger' | 'fields' | 'pigs' | 'trust' | 'simples';

export const moduleOrder: ModuleKey[] = ['hunger', 'fields', 'pigs', 'trust', 'simples'];

export const moduleRoutes: Record<ModuleKey, string> = {
  hunger: '/tools/hunger',
  fields: '/tools/fields',
  pigs: '/tools/pigs',
  trust: '/tools/trust',
  simples: '/tools/simples'
};
