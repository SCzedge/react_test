import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function AuthRoute({ autenticated, component: Component, render, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} />
          )
        ) : (
          <redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}

