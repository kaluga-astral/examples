import { NextPage } from 'next';
import { TextField, Typography, Button, Tooltip, CircularProgress } from '@astral/ui';

export const IndexPage: NextPage = () => {
  return (
    <div>
      <Typography>IndePage</Typography>
      <Tooltip title="click me">
        <Button>click me</Button>
      </Tooltip>
      <CircularProgress color='primary' size='medium' />
      <TextField label="With placeholder" placeholder="Placeholder value" />
    </div>
  );
}

export default IndexPage
