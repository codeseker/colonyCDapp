import { AvatarProps } from '~v5/shared/Avatar/types';
import { UserStatusMode } from '~v5/common/Pills/types';

export interface UserAvatarDetailsProps extends AvatarProps {
  userName?: string;
  isVerified?: boolean;
  walletAddress?: string;
  userStatus?: UserStatusMode;
  isContributorsList?: boolean;
  isBordered?: boolean;
}
