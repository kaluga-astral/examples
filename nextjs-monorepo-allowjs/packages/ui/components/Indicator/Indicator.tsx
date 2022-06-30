import { ReactNode } from 'react';

type Props = {
  isShowFooter: boolean;
  footer: ReactNode;
};

export const Indicator = ({ isShowFooter, footer }: Props) => {
  return <div>{isShowFooter && footer}</div>;
};
