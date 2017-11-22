import React from 'react';

const AboutLexicon = () => (
  <dl>
    <dt>Amendement&nbsp;:</dt>
    <dd>
      Un amendement peut être déposé par n&apos;importe quel parlementaire.
      Il lui permet de modifier, corriger ou supprimer une partie du projet ou
      de la loi en discussion dans l&apos;hémicycle. Il est systématiquement voté
      par l&apos;Assemblée, soit par un scrutin public à main levée soit par
      un scrutin public ordinaire.
    </dd>

    <dt>Commission&nbsp;:</dt>
    <dd>
      À l&apos;Assemblée nationale, les député•e•s doivent faire partie d&apos;une
      ou plusieurs commissions. Il y a huit commissions permanentes à l&apos;Assemblée
      nationale afin d&apos;examiner les projets et les propositions de loi ainsi
      que leurs amendements avant leur vote définitif dans l&apos;hémicycle.
      Voici la liste des huit commissions permanentes de l&apos;Assemblée&nbsp;:
      <ul className="fa-ul">
        <li>
          <i className="fa fa-li fa-dot-circle-o" /> Affaires culturelles et éducation
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /> Affaires économiques
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /> Affaires étrangères
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /> Affaires sociales
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /> Défense nationale et forces armées
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /> Développement durable et aménagement du territoire
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /> Finances
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /> Lois
        </li>
      </ul>
      Il y a en moyenne 70 député•e•s dans chaque commission permanente et
      50 dans la commission dédiée aux affaires européennes (qui n&apos;est pas permanente).
      <br />
      <i className="fa fa-arrow-circle-o-right" />{' '}
      <a href="http://www.assemblee-nationale.fr/13/commissions/commissions-index.asp" rel="noopener noreferrer" target="_blank">
        En savoir plus ?
      </a>
    </dd>

    <dt>CSP&nbsp;:</dt>
    <dd>
      Ce sont les professions et catégories socioprofessionnelles.
      Aussi appelées PCS, ce sigle désigne le découpage des professions
      en 6 groupes socioprofessionnels depuis 1982&nbsp;:
      <ul className="fa-ul">
        <li>
          <i className="fa fa-li fa-dot-circle-o" />Les agriculteur•trice•s exploitant•e•s
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" />Les artisan•e•s, commerçant•e•s et chefs d&apos;entreprises
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" />Les cadres et les professions intellectuelles supérieures
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" />Les professions intermédiaires
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" />Les employé•e•s
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" />Les ouvrier•ère•s
        </li>
      </ul>
    </dd>

    <dt>Groupe parlementaire&nbsp;:</dt>
    <dd>
      Les parlementaires peuvent se rassembler et former un groupe d&apos;au moins 15 députés.
      Cela permet au groupe de se déclarer dans l&apos;opposition ou dans la majorité
      et d&apos;avoir accès à la Conférence des présidents ou encore à
      des moyens matériels (bureaux, salles de réunions, etc.).
      <br />
      <i className="fa fa-arrow-circle-o-right" />{' '}
      <a href="http://www2.assemblee-nationale.fr/15/les-groupes-politiques/" rel="noopener noreferrer" target="_blank">
        En savoir plus ?
      </a>
    </dd>

    <dt>PLF&nbsp;:</dt>
    <dd>
      Le PLF désigne le Projet de Loi de Finances, étudié généralement durant
      le second semestre par l&apos;Assemblée nationale et le Sénat qui ont un délai
      de 70 jours pour l&apos;adopter. Il détermine pour l&apos;année civile suivante
      les revenus, les dépenses et l&apos;affectation des ressources de l&apos;État.
      <br />
      <i className="fa fa-arrow-circle-o-right" />{' '}
      <a href="http://www.gouvernement.fr/projet-de-loi-de-finances-plf-qu-est-ce-que-c-est" rel="noopener noreferrer" target="_blank">
        En savoir plus ?
      </a>
    </dd>

    <dt>PLFSS&nbsp;:</dt>
    <dd>
      Similaire au Projet de Loi de Finances, le PLFSS est le Projet de Loi de
      Finances de la Sécurité Sociale. Il est présenté à l&apos;automne par l&apos;exécutif
      afin de déterminer pour l&apos;année civile suivante le financement et les
      conditions nécessaires à l&apos;équilibre financier de la Sécurité Sociale.
      <br />
      <i className="fa fa-arrow-circle-o-right" />{' '}
      <a href="http://www.gouvernement.fr/projet-de-loi-de-financement-de-la-securite-sociale-plfss" rel="noopener noreferrer" target="_blank">
        En savoir plus ?
      </a>
    </dd>

    <dt>Scrutin public&nbsp;:</dt>
    <dd>
      La majorité des scrutins publics se font à main levée pour accélérer le travail
      de l&apos;Assemblée, il n&apos;y a donc pas d&apos;enregistrement systématique des votes
      individuels des députés hormis peut-être sur les vidéos des séances à l&apos;Assemblée.
      Lors de votes de projets de loi ou d&apos;amendements importants, les groupes
      d&apos;opposition déposent généralement une demande de scrutin public ordinaire et
      c&apos;est ce qui est présenté dans le taux de participation aux scrutins publics.
      L&apos;absence de vote enregistré pour un scrutin public pour un•e député•e
      ne signifie pas nécessairement son absence dans l&apos;hémicycle durant toute la séance.
    </dd>
  </dl>
);

export default AboutLexicon;
