import React from 'react'

function Home() {
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

    <TextField  fullWidth label="fullWidth" id="fullWidth" />
    <div>
      <h2>{stateGpt && stateGpt.content}</h2>
      <p>
      A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real
      </p>
    </div>
    
  </Box>
  </Container>

  </div>
  )
}

export default Home