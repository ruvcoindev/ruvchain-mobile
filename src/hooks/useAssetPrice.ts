import { Horizon } from 'stellar-sdk';

import BN from 'helpers/BN';
import loadAssetBalance from 'features/loadAssetBalance';

import useTypedSelector from './useTypedSelector';
import useActiveCurrency from './useActiveCurrency';

const useAssetPrice = (asset: Horizon.BalanceLine) => {
  const activeCurrency = useActiveCurrency();
  const bids = useTypedSelector((store) => store.bids);

  const currencyPrice = new BN(activeCurrency?.price || 0);

  return loadAssetBalance({
    asset,
    currencyPrice,
    bids,
  }).toString();
};

export default useAssetPrice;
