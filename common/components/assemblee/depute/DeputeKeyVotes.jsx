import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { parseHTML } from 'utility';

import SelectField from 'components/reusable/form/SelectField';

import css from './DeputeKeyVotes.scss';

const CatField = reduxForm({
  enableReinitialize: true,
  form: 'deputeKeyVoteList',
})(({ data, handleChange }) => (
  <Field
    name="category"
    component={SelectField}
    data={data}
    onChange={(e, category) => handleChange(category)}
  />
));

const getVoteResult = (vote) => {
  let result;

  switch (vote.vote_position) {
    case 'pour':
      result = (
        <div>
          <span className={css.pour}><i className="fa fa-check fa-fw" /> Pour</span> {vote.nom} (scrutin n°{vote.num} du {vote.scrutin_date})
        </div>
      );
      break;
    case 'contre':
      result = (
        <div>
          <span className={css.contre}><i className="fa fa-times fa-fw" /> Contre</span> {vote.nom} (scrutin n°{vote.num} du {vote.scrutin_date})
        </div>
      );
      break;
    case 'abstention':
      result = (
        <div>
          <span className={css.abstention}><i className="fa fa-ban fa-fw" /> Abstention</span> sur {vote.nom} (scrutin n°{vote.num} du {vote.scrutin_date})
        </div>
      );
      break;
    case 'absent':
      result = (
        <div>
          <span className={css.absent}><i className="fa fa-question fa-fw" /> Absent·e</span> sur {vote.nom} (scrutin n°{vote.num} du {vote.scrutin_date})
        </div>
      );
      break;
    default:
      break;
  }

  return result;
};

class DeputeKeyVotes extends Component {
  state = { category: Object.keys(this.props.depute.votes_cles).sort(Intl.Collator().compare)[0] };

  render() {
    const keyVotes = this.props.depute.votes_cles;

    return (
      <div>
        <h2>Les votes-clés</h2>
        {Object.keys(keyVotes).length ?
          <div>
            <div className={css.form}>
              <CatField
                data={Object.keys(keyVotes).sort(Intl.Collator().compare)}
                handleChange={category => this.setState({ category })}
                initialValues={{ category: this.state.category }}
              />
            </div>
            {keyVotes[this.state.category].map(vote => (
              <div className={css.listItem} key={vote.scrutin_num}>
                <h3>{vote.scrutin_dossierLibelle}</h3>
                {getVoteResult(vote)}
                <div className={css.content}>
                  {parseHTML(vote.descfmt)}
                  <div>
                    <i className="fa fa-university fa-fw" />{' '}
                    <a href={vote.lien_texte} target="_blank">Le texte à l&apos;Assemblée</a>
                  </div>
                  {(vote.lien_source) ?
                    <div>
                      <i className="fa fa-newspaper-o fa-fw" />{' '}
                      <a href={vote.lien_source} target="_blank">On en parle dans la presse</a>
                    </div>
                    :
                    false
                  }
                  <div>
                    <i className="fa fa-arrow-circle-o-right fa-fw" />{' '}
                    <a href={vote.lien} target="_blank">Voir les résultats du vote</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        :
          'Aucun vote-clé.'
        }
      </div>
    );
  }
}


DeputeKeyVotes.propTypes = {
  depute: PropTypes.shape({
    votes_cles: PropTypes.shape({}),
  }),
};

DeputeKeyVotes.defaultProps = { depute: {} };

export default DeputeKeyVotes;
