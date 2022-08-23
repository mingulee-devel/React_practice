import React,{useState} from 'react';
import './App.css';
import './exam02_mui_Login';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


//리액트 mui 기초
function Header(){
  return (
      <header>
        <h1>welcome</h1>
      </header>
  );
}
function Nav(){
  return (
      <nav>
        <ol>
          <li>html</li>
          <li>css</li>
        </ol>
      </nav>
  );
}
function Article(){
  const [open, setOpen] = useState(false);
  return (
    <article>
      <h2>Welcome</h2>
      Hello Web!
      <br /><br />
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button variant={"outlined"} onClick={()=>{
          setOpen(true);
        }}>Create</Button>
        <Button variant={"outlined"}>Update</Button>
      </ButtonGroup>
      <Button variant={"outlined"}>Delete</Button>
      <Dialog open={open}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>hello create</DialogContentText>
          <DialogActions>
            <Button variant={"outlined"}>create</Button>
            <Button variant={"outlined"} onClick={()=>{
              setOpen(false);
            }}>cancel</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </article>
  );
}

function Exam02_mui() {
  return (
    <Container fixed>
      <Header></Header>
      <Grid container>
        <Grid item xs={2}>
          <Nav></Nav>
        </Grid>
        <Grid item xs={10}>
          <Article></Article>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Exam02_mui;
