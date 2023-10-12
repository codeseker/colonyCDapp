import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import clsx from 'clsx';
import Icon from '~shared/Icon';
import styles from '../Table/Table.module.css';
import { TableHeadProps } from './types';

const displayName = 'v5.pages.VerifiedPage.partials.TableHead';

const TableHead: FC<TableHeadProps> = ({ onClick, isSortedDesc }) => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.tableHead}>
      <p>{formatMessage({ id: 'verifiedPage.table.member' })}</p>
      <p className="hidden sm:block">
        {formatMessage({ id: 'verifiedPage.table.status' })}
      </p>
      <button
        className="hidden sm:flex items-center"
        type="button"
        aria-label={formatMessage({ id: 'ariaLabel.sortReputation' })}
        onClick={onClick}
      >
        <span className="mr-1">
          {formatMessage({ id: 'verifiedPage.table.reputation' })}
        </span>
        <Icon
          name="arrow-down"
          className={clsx('w-3 h-3 transition-transform', {
            'rotate-180': !isSortedDesc,
            'rotate-0': isSortedDesc,
          })}
        />
      </button>
      <p className="hidden sm:block">
        {formatMessage({ id: 'verifiedPage.table.permission' })}
      </p>
      <div />
    </div>
  );
};

TableHead.displayName = displayName;

export default TableHead;
