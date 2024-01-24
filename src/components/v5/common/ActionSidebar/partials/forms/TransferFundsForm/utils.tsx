import { BigNumber } from 'ethers';
import moveDecimal from 'move-decimal-point';

import { Colony } from '~types/graphql';
import { findDomainByNativeId } from '~utils/domains';
import { getTokenDecimalsWithFallback } from '~utils/tokens';

import { TransferFundsFormValues } from './hooks';

export const getTransferFundsPayload = (
  colony: Colony,
  {
    amount: { amount: transferAmount, tokenAddress },
    from: fromDomainId,
    to: toDomainId,
    description: annotationMessage,
    title,
  }: TransferFundsFormValues,
) => {
  const colonyTokens = colony?.tokens?.items || [];
  const selectedToken = colonyTokens.find(
    (token) => token?.token.tokenAddress === tokenAddress,
  );
  const decimals = getTokenDecimalsWithFallback(selectedToken?.token.decimals);

  // Convert amount string with decimals to BigInt (eth to wei)
  const amount = BigNumber.from(moveDecimal(transferAmount, decimals));

  const fromDomain = findDomainByNativeId(Number(fromDomainId), colony);
  const toDomain = findDomainByNativeId(Number(toDomainId), colony);

  return {
    colonyAddress: colony.colonyAddress,
    colonyName: colony.name,
    tokenAddress,
    fromDomain,
    toDomain,
    amount,
    annotationMessage,
    customActionTitle: title,
  };
};
