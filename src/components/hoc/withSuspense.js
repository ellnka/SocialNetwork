import React from 'react'
import PropTypes from 'prop-types'
import Preloader from '../common/Preloader/Preloader'

export const withSuspense = (Component) => (props) => <React.Suspense fallback={<Preloader />}><Component {...props} /></React.Suspense>

withSuspense.propTypes = {
  Component: PropTypes.object
}
