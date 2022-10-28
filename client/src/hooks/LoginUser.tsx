import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_USER_LOGIN } from '../graphql/users';
import { User } from '../interfaces';

type LoginUserProps = {
  userName: string;
  // password: string;
};
console.log('init');

function LoginUser({ userName }: LoginUserProps) {
  // Fetch user
  const { loading, error, data } = useQuery<User>(GET_USER_LOGIN, {
    variables: {
      userName: userName.valueOf(),
      // password: password.valueOf(),
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has ocurred, can't load users.</p>;

  console.log('🚀 - data', data);
}

export default LoginUser;
