import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import qs from 'qs';

import { deputesShare } from 'utility';

import Modal from 'components/reusable/Modal';
import SelectField from 'components/reusable/form/SelectField';

import css from './Depute.scss';

class DeputeShare extends Component {
  state = {
    isModalOpen: false,
    stat1: 'participation',
    stat2: '',
    clean: false,
  };

  getTwitterAccount() {
    const twitter = this.props.depute.depute_contacts.filter(contact => contact.type === 'twitter')[0];
    return twitter && twitter.lien.match(/@\w+/g)[0];
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    const { depute, pathname } = this.props;
    const { clean, stat1, stat2 } = this.state;

    const query = qs.stringify({
      depute: depute.id,
      stat: `${stat1}${stat2.length ? `,${stat2}` : stat2}`,
      clean: clean ? true : undefined,
    });

    const imgURL = `${API_URL}/visuels/stat21?${query}`;

    const shareURL = encodeURIComponent(`${BASE_URL}${pathname}?${query}`);

    const twitterAccount = this.getTwitterAccount();
    const twitterText = `${depute.depute_nom}${twitterAccount ? ` (${twitterAccount})` : ''}, via @Obs_Democratie : `;

    return (
      <button onClick={() => this.toggleModal()}>
        <i className="fa fa-share-square fa-fw" /> Partager les données

        <Modal
          className={css.share}
          handleClose={() => this.toggleModal()}
          isOpen={this.state.isModalOpen}
          title="Formulaire de partage des données du député"
        >
          <h1>Partager les&nbsp;données&nbsp;de <strong>{depute.depute_nom}</strong></h1>

          <div>
            <h2>Quelles <strong>données</strong> vous intéressent&nbsp;?</h2>
            <div className={css.filters}>
              <Field
                name="stat1"
                component={SelectField}
                data={deputesShare}
                onChange={(e, val) => this.setState({ stat1: val })}
                textField="text"
                valueField="value"
              />
              <Field
                name="stat2"
                component={SelectField}
                data={[{ text: 'Une seule donnée', value: '' }, ...deputesShare]}
                onChange={(e, val) => this.setState({ stat2: val })}
                textField="text"
                valueField="value"
              />
            </div>

            <h2>Quel <strong>style</strong> souhaitez-vous&nbsp;?</h2>
            <div className={css.filters}>
              <Field
                name="style"
                component={SelectField}
                data={['Standard', 'Simplifié']}
                onChange={(e, val) => this.setState({ clean: val === 'Simplifié' })}
              />
            </div>

            <h2>À vous de jouer !</h2>
            <div className={css.shareChoice}>
              <img src={imgURL} alt={depute.depute_nom} />
              <div>
                <a
                  href={`http://twitter.com/share/?text=${encodeURIComponent(twitterText)}&url=${shareURL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter fa-fw" /> Partager sur Twitter
                </a>
                <a
                  href={`http://www.facebook.com/sharer.php?u=${shareURL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook fa-fw" />  Partager sur Facebook
                </a>
                <a href={`${imgURL}&download`}>
                  <i className="fa fa-download fa-fw" />  Télécharger l&apos;image
                </a>
              </div>
            </div>
          </div>

        </Modal>
      </button>
    );
  }
}

DeputeShare.propTypes = {
  depute: PropTypes.shape({
    depute_contacts: PropTypes.array.isRequired,
  }).isRequired,
  pathname: PropTypes.string.isRequired,
};

export default reduxForm({
  form: 'deputeShare',
  initialValues: {
    stat1: 'participation',
    style: 'Standard',
  },
})(DeputeShare);
