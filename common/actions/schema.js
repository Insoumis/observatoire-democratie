import { schema } from 'normalizr';

export const depute = new schema.Entity('deputes');

export const groupe = new schema.Entity('groupes', {}, { idAttribute: 'groupe_abrev' });

