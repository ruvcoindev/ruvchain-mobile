import React from 'react';
import { useRouter } from 'next/router';

import CreateWalletBlock, {
  FormValues,
} from 'components/CreateWallet';
import RouteName from 'staticRes/routes';
import createAccountAction from 'actions/accounts/create';

const CreateWallet = () => {
  const router = useRouter();

  const onSubmit = async (values: FormValues) => {
    const isDone = await createAccountAction(values.name);

    if (!isDone) {
      return {
        name: 'Error! Please try again later.',
      };
    }

    router.push(RouteName.Home);

    return {};
  };

  return <CreateWalletBlock onSubmit={onSubmit} />;
};

export default CreateWallet;
