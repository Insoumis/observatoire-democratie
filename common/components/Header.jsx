import React from 'react';

const Header = () => (
  <div>
    <nav>
      <img src="assets/logo.svg" alt="Observatoire Insoumis" />
      <ul>
        <li>Programme Présidentiel</li>
        <li>Gouvernement</li>
        <li>Assemblée Nationale</li>
      </ul>
    </nav>
    <header>
      Header super chouette sisi !
    </header>
    <nav>
      <ul>
        <li><i className="fa fa-users" aria-hidden="true" /> Groupes</li>
        <li><i className="fa fa-user-circle-o" aria-hidden="true" /> Députés</li>
        <li><i className="fa fa-thumbs-up" aria-hidden="true" /> Suivi FI</li>
      </ul>
    </nav>
  </div>
);

export default Header;
