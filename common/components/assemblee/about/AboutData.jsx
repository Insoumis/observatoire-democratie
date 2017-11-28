import React from 'react';

const AboutData = () => (
  <dl>
    <dt>Participation aux scrutins&nbsp;:</dt>
    <dd>
      Nous observons le nombre de votes d&apos;un parlementaire pour l&apos;ensemble
      des scrutins publics. Nous calculons ensuite le pourcentage de votes exprimés
      par rapport au total du nombre des scrutins publics.
    </dd>

    <dt>Contre son groupe&nbsp;:</dt>
    <dd>
      Lorsqu&apos;un•e député•e vote contre l&apos;avis majoritaire de son groupe
      lors d&apos;un scrutin public, ce vote est considéré comme étant "contre son groupe"
      (non-applicable pour les député•e•s non-inscrit•e•s).
    </dd>

    <dt>Présence en commission&nbsp;:</dt>
    <dd>
      Comptabilise le taux d&apos;apparition du député au sein d&apos;une commission.
      Si le•a député•e est absent et excusé, nous le mentionnons en dessous du taux
      d&apos;absence non justifié. Il est à noter que pour l&apos;instant,
      seules les huit commissions permanentes sont comptabilisées sur ce site.
    </dd>

    <dt>Nombre de mots et interventions&nbsp;:</dt>
    <dd>
      C&apos;est le recensement des mots et interventions de chaque député dans
      l&apos;hémicycle. Ces données sont récupérées via les comptes rendus de chaque séance.
      Les comptes rendus des commissions étant souvent incomplets voire vides nous ne les avons
      pas ajoutés dans ce calcul.
    </dd>

    <dt>Nombre d&apos;amendements rédigés&nbsp;:</dt>
    <dd>
      Lorsqu&apos;un amendement est déposé, il peut être signé par plusieurs
      parlementaires qui pourront le défendre en séance. Nous considérons que le
      premier signataire est l&apos;auteur de l&apos;amendement.
    </dd>

    <dt>Nuages de mots :</dt>
    <dd>
      Dans les nuages de mots présents sur la page "participations" sont d&pos;autant
      plus mis en avant qu&apos;ils ont été employés souvent.
      Néanmoins pour que ceux-ci puissent rester pertinents nous avons
      écarté certains mots de nos listes.<br />
      Les voici :<br />
      "ministre", "monsieur", "collègue", "madame", "premier", "cher", "effet",
      "commission", "parlementaire", "député", "deux", "amendement", "sujet",
      "texte", "an", "fois", "lieu", "trois", "mois", "rapporteur", "cinq", "quant",
      "quel", "dix", "nom", "quelle", "deuxième", "hui", "vingt", "point", "question",
      "y", "ne", "pas" ,"dire", "plus", "fait", "bien", "dit", "président".
    </dd>


  </dl>
);

export default AboutData;
