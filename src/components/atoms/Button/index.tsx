import React, { ReactChild } from 'react';

import BaseButton from './styled';

export type ButtonProps = {
  isFullWidth?: boolean;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  ghost?: boolean;
  href?: string;
  loading?: boolean;
  onClick?: () => void;
  icon?: ReactChild;
};

type ChildrenProps = {
  icon?: ReactChild;
};

const Children: React.FC<ChildrenProps> = ({ icon, children }) => (
  <>
    {icon && icon}
    {children}
  </>
);

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({ children, icon, loading, ...props }) => (
  <BaseButton {...props}>{loading ? <div /> : <Children icon={icon}>{children}</Children>}</BaseButton>
);

export default Button;
