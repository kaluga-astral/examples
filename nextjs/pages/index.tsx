import { NextPage } from 'next';
import { TextField, Typography, Button } from '@astral/ui';

export const IndexPage: NextPage = () => {
  return (
    <div>
      <Typography>IndePage</Typography>
      <Button>click me</Button>
      {new Array(500).fill('').map((_value, i) => {
        return (
          <div key={i}>
            <TextField label="With placeholder" placeholder="Placeholder value" />
          </div>
        )
      })}
    </div>
  );
}

export default IndexPage
