import {
  Grid, IconButton, TextField,
} from '@material-ui/core';
import { Add, Close } from '@material-ui/icons';
import React, { useState } from 'react';
import uuid from 'uuid-random';

export default (props) => {
  // eslint-disable-next-line react/prop-types
  const { scratchPads: scratchPadsFromProps } = props;

  const scratchpadsProps = scratchPadsFromProps || [{
    name: 'Untitled',
    id: uuid(),
    content: '',
  }];

  const [scratchpads, setScratchpads] = useState(scratchpadsProps);

  const removePad = (id) => {
    const newPads = scratchpads.filter((item) => item.id !== id);
    setScratchpads(newPads);
  };

  return (
    <div style={{ margin: 10, width: '100vw', overflowX: 'scroll' }}>
      <h4>
        Scratch Pad
      </h4>
      <IconButton
        onClick={() => {
          setScratchpads([
            ...scratchpads,
            {
              name: 'Untitled',
              id: uuid(),
            },
          ]);
        }}
      >
        <Add label="Add Note" />
      </IconButton>
      <Grid container spacing={2}>
        {scratchpads.map((scratchpad, index) => (
          <Grid item key={`ind-${scratchpad.id}`}>
            <TextField
              key={`ind-${scratchpad.id}-field`}
              rows={6}
              label={`Note ${index + 1}`}
              variant="outlined"
              multiline
              style={{ background: 'lightyellow' }}
            >
              {scratchpad.content}
            </TextField>
            <IconButton style={{ padding: 1 }} onClick={() => removePad(scratchpad.id)}><Close /></IconButton>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
