import React from 'react';

import { UserCard } from './UserCard';

type IUsersAddress = {
  city: string,
  street: string
};

type IUsersItem = {
  id: number,
  name: string,
  email: string,
  address: IUsersAddress,
  phone: string,
}

interface IUsersProps {
  users: IUsersItem[];
}

export const Users: React.FC<IUsersProps> = props => {
  const { users } = props;

  return (
    <>
      { users.map((item) =>
        <UserCard
          id={ item.id }
          name={ item.name }
          email={ item.email }
          city={ item.address.city }
          street={ item.address.street }
          phone={ item.phone }
        />
      ) }
    </>
  );
};