import { Button, Grid, Typography } from '@astral/ui';

import { StyledButton } from './styled';

export const Header = () => {
  return (
    <Grid
      templateColumns="1fr 1fr 1fr"
      columnSpacing={2}
      justifyContent="space-between"
    >
      <StyledButton>Styled Btn</StyledButton>
      <Button>Btn text</Button>
      <Typography margin={(theme) => theme.elevation[200]}>
        Typography
      </Typography>
      <Button variant="contained">Btn contained</Button>
    </Grid>
  );
};
