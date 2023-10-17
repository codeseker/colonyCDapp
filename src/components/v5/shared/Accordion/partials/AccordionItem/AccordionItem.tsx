import React, { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import { accordionAnimation } from '~constants/accordionAnimation';
import Icon from '~shared/Icon';

import { AccordionItemProps } from './types';
import useToggle from '~hooks/useToggle';

const displayName = 'v5.Accordion.partials.AccordionItem';

const AccordionItem: FC<PropsWithChildren<AccordionItemProps>> = ({
  title,
  iconName = 'arrow-down',
  isOpen: isOpenProp = false,
  className,
  children,
}) => {
  const [isOpen, { toggle }] = useToggle({ defaultToggleState: isOpenProp });

  return (
    <div className={clsx(className, 'w-full')}>
      <button
        type="button"
        onClick={toggle}
        className={`
          accordion-toggler
          w-full
          flex
          items-center
          justify-between
          text-left
          gap-4
          transition-colors
          md:hover:text-blue-500
        `}
      >
        {title}
        <span
          className={clsx('transition-transform duration-[400ms] ease-out', {
            'rotate-180': isOpen,
          })}
        >
          <Icon name={iconName} appearance={{ size: 'extraTiny' }} />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="accordion-content"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={accordionAnimation}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="accordion-content"
          >
            <div>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

AccordionItem.displayName = displayName;

export default AccordionItem;
