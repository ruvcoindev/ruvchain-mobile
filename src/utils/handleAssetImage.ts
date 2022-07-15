import { Horizon } from 'stellar-sdk';

import { AssetImage } from 'reducers/assetImages';
import xlmLogo from 'public/images/xlm-logo.svg';
import questionLogo from 'public/images/question-circle.png';

const handleAssetImage = (
  asset: Horizon.BalanceLine,
  assetImages: AssetImage[],
) => {
  if (!asset) {
    return questionLogo.src;
  }

  if (asset.logo) {
    return asset.logo;
  }

  if (asset.asset_type === 'native') {
    return xlmLogo.src;
  }

  if (asset.asset_type === 'liquidity_pool_shares') {
    return questionLogo.src;
  }

  const assetImageFound = assetImages.find(
    (assetImage) =>
      assetImage.asset_code === asset.asset_code &&
      assetImage.asset_issuer === asset.asset_issuer,
  );

  if (!assetImageFound) {
    return questionLogo.src;
  }

  if (assetImageFound.logo) {
    return assetImageFound.logo;
  }

  return questionLogo.src;
};

export default handleAssetImage;
