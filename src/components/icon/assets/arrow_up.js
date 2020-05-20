import React from 'react';

const EuiIconArrowUp = ({ title, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <title>{title}</title>
    <path
      fillRule="nonzero"
      d="M2.931 10.843l4.685-4.611a.546.546 0 01.768 0l4.685 4.61c.213.21.558.21.771 0a.53.53 0 000-.759l-4.684-4.61a1.65 1.65 0 00-2.312 0l-4.684 4.61a.53.53 0 000 .76c.213.21.558.21.771 0z"
    />
  </svg>
);

export const icon = EuiIconArrowUp;