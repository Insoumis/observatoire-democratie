/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import numeral from 'numeral';
import sanitizeHtml from 'sanitize-html';

numeral.register('locale', 'fr', {
  delimiters: {
    thousands: '\u00a0',
    decimal: ',',
  },
});
numeral.locale('fr');

export const formatNbr = (value, format = '0,0') => numeral(value).format(format);

export const parseHTML = html => (
  <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }} />
);

export const withResize = WrappedComponent => (
  class WithResize extends Component {
    static displayName = `WithResize(${WrappedComponent.displayName || WrappedComponent.name || 'Component'}})`;

    state = { height: 0, width: 0 };

    componentDidMount() {
      this.update();

      const callback = window.onresize;
      window.onresize = () => {
        if (callback) {
          callback();
        }
        this.update();
      };
    }

    update() {
      this.setState({ height: this.node.offsetHeight, width: this.node.offsetWidth });
    }

    render() {
      return (
        <div ref={(node) => { this.node = node; }} style={{ height: '100%' }}>
          <WrappedComponent {...this.props} height={this.state.height} width={this.state.width} />
        </div>
      );
    }
  }
);

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

export const csps = [{
  text: 'Agriculteur·trice·s exploitant·e·s',
  value: 'Agriculteurs exploitants',
}, {
  text: 'Artisans, commerçant·e·s et chefs d\'entreprise',
  value: 'Artisans, commerçants et chefs d\'entreprise',
}, {
  text: 'Autres (y compris inconnu et sans profession déclarée)',
  value: 'Autres (y compris inconnu et sans profession déclarée)',
}, {
  text: 'Cadres et professions intellectuelles supérieures',
  value: 'Cadres et professions intellectuelles supérieures',
}, {
  text: 'Employé·e·s',
  value: 'Employés',
}, {
  text: 'Ouvrier·ère·s',
  value: 'Ouvriers',
}, {
  text: 'Professions Intermédiaires',
  value: 'Professions Intermédiaires',
}, {
  text: 'Retraité·e·s',
  value: 'Retraités',
}];

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