/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router-dom'

import { useInjectReducer } from '../../utils/injectReducer'
import { useInjectSaga } from '../../utils/injectSaga'
import reducer from './store/reducers'
import saga from './store/sagas'

import H2 from '../../components/H2'
import { changeUsername } from './store/actions'
import { makeSelectUsername } from './store/selectors'

const key = 'home'

export function HomePage({
  username,
  loading,
  error,
  onSubmitForm,
}: any) {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm()
  }, [onSubmitForm, username])

  // const reposListProps = {
  //   loading,
  //   error,
  // }

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div className="main-container">
        <H2>
        </H2>
        <p>
        </p>
        <div className="p--10 pl-0">
          <Link to={`/landing`} className="mr-15">Landing Page</Link>
          <Link to={`/sign-in`} className="mr-15">Sign in Page</Link>
          <Link to={`/sign-up`} >Sign up Page</Link>
        </div>
      </div>
    </article>
  )
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  username: PropTypes.string,
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
})

export function mapDispatchToProps(dispatch: any) {
  return {
    onChangeUsername: (evt: any) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt: any) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
)(HomePage)
