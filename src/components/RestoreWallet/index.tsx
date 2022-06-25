import React from 'react';

import { FormValues } from 'components/PrivateKey';

import TabList from './TabList';

type RestoreWalletProps = {
  children?: React.ReactNode;
  onSubmit: (v: FormValues) => Promise<Partial<FormValues>>;
  onSubmitBackup: () => void;
};

const RestoreWallet = ({
  children,
  onSubmit,
  onSubmitBackup,
}: RestoreWalletProps) => (
  <>
    {children}
    <TabList
      onSubmitBackup={onSubmitBackup}
      onSubmitPrivateKey={onSubmit}
    />
  </>
);

RestoreWallet.defaultProps = {
  children: '',
};

export default RestoreWallet;