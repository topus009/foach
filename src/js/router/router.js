import React, { Suspense } from 'react';
import { shape, string, number, bool } from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';

import Helmet from 'react-helmet';
import { Router as ReactRouter } from 'react-router-dom';
import { createHashHistory } from 'history';
import { defaultTheme } from '../config/theme';
import Loader from '../components/common/Loader';
import Header from '../components/Header';
import Routes from './routes';
import GlobalStyle, { theme } from './styles';

export const history = createHashHistory();

const propTypes = {
  user: shape({
    ID: number,
    UserName: string.isRequired,
    Completed: bool,
  }),
};

const AppRouter = ({ user }) => (
  <ThemeProvider theme={theme}>
    <ReactRouter history={history} basename="/green-todo">
      <GlobalStyle />
      <Helmet htmlAttributes={{ class: `theme-${defaultTheme}` }} />
      <Suspense fallback={<Loader />}>
        {user && <Header user={user} />}
        <Routes />
      </Suspense>
    </ReactRouter>
  </ThemeProvider>
);

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return {
    user,
  };
};

AppRouter.propTypes = propTypes;

export default connect(mapStateToProps)(AppRouter);
