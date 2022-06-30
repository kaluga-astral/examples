import { NextPage } from 'next';
import {
  AngeCircleIcon,
  Button,
  CircularProgress,
  TextField,
  Tooltip,
  Typography,
  isBoolean,
} from '@example/ui';
import { ButtonCustom } from 'components';

export const IndexPage: NextPage = () => {
  return (
    <div>
      <Typography>IndePage</Typography>
      <Tooltip title="click me">
        <Button>click me</Button>
      </Tooltip>
      {isBoolean(true) && <span>isBoolean js</span>}
      <CircularProgress color="primary" size="medium" />
      <TextField label="With placeholder" placeholder="Placeholder value" />
      <AngeCircleIcon />
      <ButtonCustom />
    </div>
  );
};

export default IndexPage;
