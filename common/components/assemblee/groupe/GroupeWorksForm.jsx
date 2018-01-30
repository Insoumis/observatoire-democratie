import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearFields, Field, formValueSelector, reduxForm } from 'redux-form';
import qs from 'qs';

import { amendementsSort, documentsTypes, questionsTypes, worksTypes } from 'utility';

import SearchField from 'components/reusable/form/SearchField';
import SelectField from 'components/reusable/form/SelectField';

import css from './GroupeWorks.scss';

const GroupeWorksForm = ({ dispatch, handleSubmit, router, typeSelected }) => {
  const goTo = (data) => {
    const search = Object.keys(data).reduce((acc, key) => {
      if (key !== 'page' && data[key].length) {
        acc[key] = data[key];
      }

      return acc;
    }, {});

    if (search.type === '') {
      dispatch(clearFields('groupeWorksForm', false, false, 'documentType', 'questionType', 'sort'));
    } else if (search.type === 'document') {
      dispatch(clearFields('groupeWorksForm', false, false, 'questionType', 'sort'));
    } else if (search.type === 'question') {
      dispatch(clearFields('groupeWorksForm', false, false, 'documentType', 'sort'));
    } else if (search.type === 'amendement') {
      dispatch(clearFields('groupeWorksForm', false, false, 'documentType', 'questionType'));
    }

    if (search.documentType && search.documentType !== '') {
      search.type = search.documentType;
      delete search.documentType;
    }

    if (search.questionType && search.questionType !== '') {
      search.type = search.questionType;
      delete search.questionType;
    }

    if (search.type !== 'amendement' && search.sort) {
      delete search.sort;
    }

    router.push(`${router.location.pathname}?${qs.stringify(search)}`);
  };

  let secondField;
  switch (typeSelected) {
    case 'document':
      secondField = (
        <Field
          component={SelectField}
          data={documentsTypes}
          name="documentType"
          onChange={(e, documentType) => goTo({ ...router.location.query, documentType })}
          textField="text"
          valueField="value"
        />
      );
      break;
    case 'question':
      secondField = (
        <Field
          component={SelectField}
          data={questionsTypes}
          name="questionType"
          onChange={(e, questionType) => goTo({ ...router.location.query, questionType })}
          textField="text"
          valueField="value"
        />
      );
      break;
    case 'amendement':
      secondField = (
        <Field
          component={SelectField}
          data={amendementsSort}
          name="sort"
          onChange={(e, sort) => goTo({ ...router.location.query, sort })}
          textField="text"
          valueField="value"
        />
      );
      break;
    default:
      secondField = false;
  }

  return (
    <form onSubmit={handleSubmit(data => goTo(data))}>
      <Field component={SearchField} name="requete" placeholder="Faire une recherche ..." />
      <div className={`flex wrap space-between ${css.filters}`}>
        <Field
          component={SelectField}
          data={worksTypes}
          name="type"
          onChange={(e, type) => goTo({ ...router.location.query, type })}
          textField="text"
          valueField="value"
        />
        {secondField}
      </div>
    </form>
  );
};

GroupeWorksForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  router: PropTypes.shape({}).isRequired,
  typeSelected: PropTypes.string,
};

GroupeWorksForm.defaultProps = { typeSelected: null };

export default connect(
  state => ({
    typeSelected: formValueSelector('groupeWorksForm')(state, 'type'),
  }),
)(reduxForm({ form: 'groupeWorksForm' })(GroupeWorksForm));
