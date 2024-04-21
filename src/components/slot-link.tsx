// your-button.jsx
import { Slot } from '@radix-ui/react-slot';
import { ReactElement } from 'react';
import { useLinkClickHandler } from 'react-router-dom';

type SlotLinkProps = {
  to: string;
  children: ReactElement;
};

export const SlotLink = ({ to, ...props }: SlotLinkProps) => {
  const handleClick = useLinkClickHandler(to);
  return <Slot onClick={handleClick} {...props} />;
};
