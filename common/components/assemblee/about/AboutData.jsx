import React from 'react';

const AboutData = () => (
  <dl>
    <dt>Nombre d&apos;amendements rédigés :</dt>
    <dd>
      Lorsqu&apos;un amendement est déposé, il peut être signé par plusieurs
      parlementaires qui pourront le défendre en séance. Nous considérons que le
      premier signataire est l&apos;auteur de l&apos;amendement.
    </dd>

    <dt>Nombre de mots et interventions :</dt>
    <dd>
      C&apos;est le recensement des mots et interventions de chaque député dans
      l&apos;hémicycle. Ces données sont récupérées via les comptes rendus de chaque séance.
      Les comptes rendus des commissions étant souvent incomplets voire vides nous ne les avons
      pas ajoutés dans ce calcul.
    </dd>

    <dt>Présence en commission :</dt>
    <dd>
      Comptabilise le taux d&apos;apparition du député au sein d&apos;une commission.
      Si le•a député•e est absent et excusé, nous le mentionnons en dessous du taux
      d&apos;absence non justifié. Il est à noter que pour l&apos;instant,
      seules les huit commissions permanentes sont comptabilisées sur ce site.
    </dd>

    <dt>Contre son groupe :</dt>
    <dd>
      Lorsqu&apos;un•e député•e vote contre l&apos;avis majoritaire de son groupe
      lors d&apos;un scrutin public, ce vote est considéré comme étant "contre son groupe"
      (non-applicable pour les député•e•s non-inscrit•e•s).
    </dd>

    <dt>Participation aux scrutins :</dt>
    <dd>
      Nous observons le nombre de votes d&apos;un parlementaire pour l&apos;ensemble
      des scrutins publics. Nous calculons ensuite le pourcentage de votes exprimés
      par rapport au total du nombre des scrutins publics.
    </dd>
  </dl>
);

export default AboutData;
