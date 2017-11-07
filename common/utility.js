import numeral from 'numeral';

numeral.register('locale', 'fr', {
  delimiters: {
    thousands: '\u00a0',
    decimal: ',',
  },
});
numeral.locale('fr');

export const formatNbr = value => numeral(value).format('0,0');

export const groups = [{
  text: 'La France Insoumise',
  value: 'FI',
}, {
  text: 'Gauche Démocrate et Républicaine',
  value: 'GDR',
}, {
  text: 'Les Constructifs',
  value: 'LC',
}, {
  text: 'Les Républicains',
  value: 'LR',
}, {
  text: 'Mouvement Démocrate et apparentés',
  value: 'MODEM',
}, {
  text: 'Nouvelle Gauche',
  value: 'NG',
}, {
  text: 'Non Inscrit',
  value: 'NI',
}, {
  text: 'La République en Marche',
  value: 'REM',
}];

export const regions = [
  'Auvergne-Rhône-Alpes',
  'Bourgogne-Franche-Comté',
  'Bretagne',
  'Centre-Val de Loire',
  'Corse',
  'Français établis hors de France',
  'Grand Est',
  'Guadeloupe',
  'Guyane',
  'Hauts-de-France',
  'Ile-de-France',
  'Martinique',
  'Mayotte',
  'Normandie',
  'Nouvelle-Aquitaine',
  'Nouvelle-Calédonie',
  'Occitanie',
  'Pays de la Loire',
  'Polynésie française',
  'Provence-Alpes-Côte d\'Azur',
  'Réunion',
  'Saint-Barthélemy et Saint-Martin',
  'Saint-Pierre-et-Miquelon',
  'Wallis-et-Futuna',
];

export const csps = [
  'Agriculteurs exploitants',
  'Artisans, commerçants et chefs d\'entreprise',
  'Autres (y compris inconnu et sans profession déclarée)',
  'Cadres et professions intellectuelles supérieures',
  'Employés',
  'Ouvriers',
  'Professions Intermédiaires',
  'Retraités',
];

export const ages = [
  '20-30 ans',
  '30-40 ans',
  '40-50 ans',
  '50-60 ans',
  '60-70 ans',
  '70-80 ans',
];

export const tris = [{
  text: 'Participation aux scrutins publics',
  value: 'stats.positions.exprimes',
}, {
  text: 'Contre son groupe',
  value: 'stats.positions.dissidence',
}, {
  text: 'Nombre d\'interventions',
  value: 'stats.nbitvs',
}, {
  text: 'Nombre de mots',
  value: 'stats.nbmots',
}, {
  text: 'Amendements rédigés',
  value: 'stats.amendements.rediges',
}, {
  text: 'Présence en commission',
  value: 'stats.commissions.present',
}];
