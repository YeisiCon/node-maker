import * as React from 'react';
import { Typography, Card, CardContent, Button, TextField, Box } from '@mui/material';
import CardStyle from "../../public/src/styles/CardStyle";


const Home = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        background: '#4d56',
        height: '89vh'
      }}
    >
      <Card style={{ width: 300, height: 545 }}>
        <CardContent    >
          <Typography
            align='center'
            margin="normal"
            variante="h5"
            style={CardStyle.Titl}
          >
            New Server
          </Typography>
          <TextField
            id="outlined-basic"
            label="Name Server"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-number"
            label="Max memory"
            type="number"
            size="small"
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Min memory"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" style={CardStyle.Button}>save</Button>
        </CardContent>
      </Card>
      <Card style={{ width: '65%', height: 545 }}>
        <Typography
          align='center'
          margin="normal"
          variante="h5"
          style={CardStyle.Titl}
        >
          New Server
        </Typography>
      </Card>
    </div>
  )

}
export default Home;
