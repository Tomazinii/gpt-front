import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import { ContextGPT } from './Context';
import { generative } from './Action';


function App() {

  const [text, setText] = React.useState()
  const [history, sethistory] = React.useState()

  const { stateGpt, dispatchGpt } = React.useContext(ContextGPT);


  const sendText = (e)=> {
    e.preventDefault();
    sethistory(text)
    generative(text,dispatchGpt)
  }
  
  return (
    <div className="App">
      <Container maxWidth="sm">


    <Box
      sx={{
        width: 500,
        marginTop: 20,
        maxWidth: '100%',
      }}
    >
        <h2 style={{textAlign:"center"}}>GPT BAHIANO</h2>

        <form onSubmit={(e) => sendText(e)}>

      <TextField onChange={(e)=>{setText(e.target.value);}} fullWidth label="Pergunte" id="Digite" />
      </form>
      <div>
        <p>
          {history}
        </p>
        {stateGpt && stateGpt.load ? <CircularProgress style={{marginTop: 50}} />
        : 
        <p style={{ background: "rgb(240,253,255)",borderRadius:5 , padding:20, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
           {stateGpt && stateGpt.content}
        </p>
        }
      </div>
      
    </Box>
    </Container>

    </div>
  );
}

export default App;
