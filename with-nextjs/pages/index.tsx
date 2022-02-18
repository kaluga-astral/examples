import * as React from 'react';
import { TextField } from '@astral/ui';

export function Index() {
  return (
    <div>
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

export default Index
