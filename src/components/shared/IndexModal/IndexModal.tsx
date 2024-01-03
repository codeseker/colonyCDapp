import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { MessageDescriptor, FormattedMessage } from 'react-intl';

import Button from '~shared/Button';
import Dialog, { DialogProps } from '~shared/Dialog';
import { Heading3 } from '~shared/Heading';
import Icon from '~shared/Icon';
import { UniversalMessageValues } from '~types';

import IndexModalItem from './IndexModalItem';

import styles from './IndexModal.css';

const displayName = 'IndexModal';

export interface ItemShape {
  title: MessageDescriptor;
  description: MessageDescriptor;
  icon: string;
  comingSoon?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  permissionRequired?: boolean;
  permissionInfoText?: MessageDescriptor;
  permissionInfoTextValues?: UniversalMessageValues;
  dataTest?: string;
}

interface Props extends DialogProps {
  items: ItemShape[];
  title: MessageDescriptor;
  back?: () => void;
}

const IndexModal = ({ title, cancel, items, back }: Props) => {
  /*
   * @NOTE See nanoId's docs about the reasoning for this
   * https://github.com/ai/nanoid#react
   */
  const [autogeneratedIds] = useState<string[]>(
    [...new Array(items.length)].map(nanoid),
  );
  return (
    <Dialog cancel={cancel}>
      <div className={styles.header}>
        <Heading3
          appearance={{
            margin: 'none',
            theme: 'dark',
          }}
          text={title}
        />
      </div>
      <div className={styles.content}>
        {items.map((item, index) => (
          <IndexModalItem item={item} key={autogeneratedIds[index]} />
        ))}
        {back && (
          <Button
            appearance={{ theme: 'secondary' }}
            onClick={back}
            className={styles.backButton}
          >
            <Icon
              appearance={{ size: 'normal' }}
              name="caret-left"
              title={{ id: 'button.back' }}
            />
            <FormattedMessage id="button.back" />
          </Button>
        )}
      </div>
    </Dialog>
  );
};

IndexModal.displayName = displayName;

export default IndexModal;
