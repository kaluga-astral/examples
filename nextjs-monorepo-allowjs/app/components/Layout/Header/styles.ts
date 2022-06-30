import { styled } from '@example/ui';

export const HeaderLogo = styled.img`
  width: 20px;
  height: 20px;

  background-color: ${({ theme }) => theme.palette.background.default};
  cursor: pointer;
`;
