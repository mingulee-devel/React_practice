import logo from './logo.svg';
import './App.css';
import {useState} from "react";

//리액트 기초
function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    //key값은 반복문 안에서만 고유하면 됨.
    lis.push(<li key={t.id} onClick={event => {
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
      //이벤트를 유발시킨 태그의 id (a태그의 id)
      //숫자를 입력했더라도 속성으로 넘겨주면 문자열로 변경된다.
      //다시 숫자로 타입을 변경해주자.
    }}>
      <a id={t.id} href={'/read/' + t.id}>{t.title}</a>
    </li>);
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Header(props) {
  console.log(props);
  return <header>
    <h1><a href="/" onClick={(event) => {
      event.preventDefault(); //클릭해도 Reload 안 됨.
      props.onChangeMode(); //선언해둔 함수 실행
    }}>{props.title}</a></h1>
  </header>
}

function Create(props) {
  //form 태그는 submit을 했을 때 reload가 된다.
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      //event.tartget = form태그, .title = title태그
      const title = event.target.title.value;
      const body = event.target.body.value;

      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title"/></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"/></p>
    </form>
  </article>
}

function App() {

  /*  const _mode = useState('WELCOME');
  console.log(_mode);
  const mode = _mode[0];
  const setMode = _mode[1];*/

  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  //다음 원소의 아이디값을 따로 관리.
  const [nextId, setNextId] = useState(4);

  //함수 안에서 변수의 값이 변경되지 않기 때문에 const로 선언
  /*const topics = [
    {id: 1, title: "html", body: "html is..."},
    {id: 2, title: "css", body: "css is..."},
    {id: 3, title: "Javascript", body: "Javascript is..."}
  ]*/
  //topics에 값을 추가해주기 위해서 상태로 승격 시켜주기
  //읽기와 쓰기 인터페이스 추가
  const [topics, setTopics] = useState([
    {id: 1, title: "html", body: "html is..."},
    {id: 2, title: "css", body: "css is..."},
    {id: 3, title: "Javascript", body: "Javascript is..."}
  ]);

  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body)=>{
      //사용자가 입력한 값을 create 컴포넌트에서 사용할 수 있다.
      //추가되면 topics에 추가되어야 함.
      //객체 생성
      const newTopic = {id: nextId, title:_title, body:_body};
      const newTopics = [...topics]; //원본 topics 복사
      newTopics.push(newTopic); //복제한 newTopisc에 추가할 친구 push
      setTopics(newTopics); //push된 친구를 setTopics 해준다.
      //만약 상태로 만드려는 객체가 범객체라면? (ex object, array..)
      //처리 방법이 달라진다.
      //newValue = {...value} //복제하는 코드
      //newValue 변경
      //setValue(newValue) //복제본 변경

      //잘 추가 되었는지 확인하기 위해 상세 페이지로 이동
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  }

  return (
      <div>
        <Header title="NewTitle" onChangeMode={() => {
          setMode('WELCOME'); //위에 선언된 이름으로 사용하는 것.
        }}></Header>
        <Nav topics={topics} onChangeMode={(_id) => {
          setMode('READ');
          setId(_id);
        }}></Nav>
        {content}

        <a href="/create" onClick={(event) => {
          event.preventDefault();
          setMode('CREATE');
        }}>create</a>
      </div>
  );
}

export default App;
