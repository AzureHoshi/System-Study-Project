import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import { ThemeContext } from './ThemeWrapper';
import {
  Parent,
  DashboardPage,
  BlankPage,
  Form,
  Table,
  Error,
  NotFound,
  InterestQuestion,
  UpdataStudyHistory,
  StudyHistory,
  RecommendInterest,
  StudentFeedback,
} from '../pageListAsync';

function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);
  return (
    <Dashboard
      history={history}
      changeMode={changeMode}>
      <Switch>
        <Route
          exact
          path='/app'
          component={BlankPage}
        />
        <Route
          exact
          path='/app/blank-page'
          component={BlankPage}
        />
        <Route
          exact
          path='/app/interest-question'
          component={InterestQuestion}
        />
        <Route
          exact
          path='/app/updata-studyhistory'
          component={UpdataStudyHistory}
        />
        <Route
          path='/app/study-history'
          component={StudyHistory}
        />
        <Route
          path='/app/recommend-Internet'
          component={RecommendInterest}
        />
        <Route
          path='/app/student-feedback'
          component={StudentFeedback}
        />
        <Route
          path='/app/pages/dashboard'
          component={DashboardPage}
        />
        <Route
          path='/app/pages/form'
          component={Form}
        />
        <Route
          path='/app/pages/table'
          component={Table}
        />
        <Route
          path='/app/pages/not-found'
          component={NotFound}
        />
        <Route
          path='/app/pages/error'
          component={Error}
        />
        <Route
          exact
          path='/app/pages'
          component={Parent}
        />
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;
