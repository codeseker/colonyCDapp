import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import { toast } from 'react-toastify';
import { SlotKey, useUserSettings } from '~hooks';
import Navigation from '~v5/common/Navigation';
import TwoColumns from '~v5/frame/TwoColumns';
import Spinner from '~v5/shared/Spinner';
import { useUserAdvancedPage } from './hooks';
import { HookForm } from '~shared/Fields';
import { canUseMetatransactions } from '~utils/checks';
import Toast from '~shared/Extensions/Toast';
import SettingsRow from '../SettingsRow/SettingsRow';
import SettingsInputRow from '../SettingsInputRow';
import { AdvancedSettingsFields } from './types';

const displayName = 'v5.pages.UserAdvancedPage.partials.UserAdvancedSettings';

const UserAdvancedSettings = () => {
  const { formatMessage } = useIntl();
  const {
    setFormValuesToLocalStorage,
    rpcValidationSchema,
    metatransactionsValidationSchema,
  } = useUserAdvancedPage();

  const metatransactionsAvailable = canUseMetatransactions();
  const {
    settings: {
      metatransactions: metatransactionsSetting,
      decentralizedModeEnabled,
      customRpc,
    },
    setSettingsKey,
  } = useUserSettings();
  const [isInputVisible, setIsInputVisible] = useState(
    decentralizedModeEnabled,
  );
  const metatransasctionsDefault = metatransactionsAvailable
    ? metatransactionsSetting
    : false;

  const handleSubmit = (values: Partial<AdvancedSettingsFields>) => {
    setFormValuesToLocalStorage(values, setSettingsKey);
  };

  return (
    <Spinner loadingText={{ id: 'loading.userAdvancedPage' }}>
      <TwoColumns aside={<Navigation pageName="profile" />}>
        <HookForm
          validationSchema={metatransactionsValidationSchema}
          defaultValues={{
            [SlotKey.Metatransactions]: metatransasctionsDefault,
          }}
          onSubmit={handleSubmit}
        >
          <h4 className="heading-4 mb-6">
            {formatMessage({ id: 'userAdvancedPage.title' })}
          </h4>
          <div className="border-b border-gray-200">
            <SettingsRow
              title={{ id: 'advancedSettings.fees.title' }}
              description={{ id: 'advancedSettings.fees.description' }}
              tooltipMessage={{ id: 'advancedSettings.fees.tooltip' }}
              id={SlotKey.Metatransactions}
              onChange={(value) => {
                handleSubmit({ [SlotKey.Metatransactions]: value });
                toast.success(
                  <Toast
                    type="success"
                    title={{ id: 'advancedSettings.fees.toast.title' }}
                    description={{
                      id: value
                        ? 'advancedSettings.fees.toast.description.true'
                        : 'advancedSettings.fees.toast.description.false',
                    }}
                  />,
                );
              }}
            />
          </div>
        </HookForm>
        <HookForm
          validationSchema={rpcValidationSchema}
          defaultValues={{
            [SlotKey.DecentralizedMode]: decentralizedModeEnabled,
            [SlotKey.CustomRPC]: customRpc,
          }}
        >
          <div className="border-b border-gray-200">
            <SettingsRow
              title={{ id: 'advancedSettings.rpc.title' }}
              description={{ id: 'advancedSettings.rpc.description' }}
              tooltipMessage={{ id: 'advancedSettings.rpc.tooltip' }}
              id={SlotKey.DecentralizedMode}
              onChange={(value) => {
                setIsInputVisible(value);
                handleSubmit(
                  value
                    ? { [SlotKey.DecentralizedMode]: value }
                    : {
                        [SlotKey.DecentralizedMode]: value,
                        [SlotKey.CustomRPC]: '',
                      },
                );
              }}
            />
            <SettingsInputRow
              isOpen={isInputVisible}
              handleSubmit={handleSubmit}
            />
          </div>
        </HookForm>
        <div className="border-b border-gray-200">
          <SettingsRow
            title={{ id: 'advancedSettings.account.title' }}
            description={{ id: 'advancedSettings.account.description' }}
            // @TODO: Add functionality to download user data
            onClick={() => {}}
            buttonLabel={{ id: 'advancedSettings.account.button' }}
            buttonIcon="file-arrow-down"
            buttonMode="primaryOutline"
          />
        </div>
        <SettingsRow
          title={{ id: 'advancedSettings.delete.title' }}
          description={{ id: 'advancedSettings.delete.description' }}
          // @TODO: Add functionality to delete account
          onClick={() => {}}
          buttonLabel={{ id: 'advancedSettings.delete.button' }}
          buttonIcon="trash"
          buttonMode="secondaryOutline"
        />
      </TwoColumns>
    </Spinner>
  );
};

UserAdvancedSettings.displayName = displayName;

export default UserAdvancedSettings;
