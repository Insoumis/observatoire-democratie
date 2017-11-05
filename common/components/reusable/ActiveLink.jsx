import React from 'react';
import { Link } from 'react-router';

const ActiveLink = props => <Link activeClassName="active" {...props} />;

export default ActiveLink;
