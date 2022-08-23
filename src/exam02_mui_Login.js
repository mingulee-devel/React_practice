import {
  Checkbox,
  TextField,
  Button,
  FormControlLabel,
  Link,
  Grid,
  Typography,
  Avatar,
  Box,
  Container
} from "@mui/material";
//npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

//리액트 로그인
function Exam02_mui_Login() {
  return (
    //  화면 크기를 extra small로 하겠다. (mui break point 검색, 더 많은 조건 있음)
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
      >
        {/*동그란 ui를 만들어준. 마진, 배경색상 */}
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        {/*실제 컴포넌트는 h1, h5에 적용된 디자인을 가져온다.*/}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/*mui에서 지정된 마진 normal 값 지정*/}
        <TextField margin="normal" label="Email Address" required fullWidth name="email" autoComplete="email" autoFocus/>
        <TextField margin="normal" label="Password" type="password" required fullWidth name="password" autoComplete="current-password"/>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary"></Checkbox>}
          label="Remember Me"/>
        <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>
          Sign in
        </Button>
        <Grid container>
          {/*xs는 자동 레이아웃, 나머지 공간을 모두 갖는다.*/}
          <Grid item xs>
            <Link>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link>Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Exam02_mui_Login;
