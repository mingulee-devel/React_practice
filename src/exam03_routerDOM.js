//react router dom을 사용하고 싶은 컴포넌트의 최상위 컴포넌트 (wrapper)
import {BrowserRouter, HashRouter, Route, Routes, Link, NavLink, useParams, Outlet} from "react-router-dom";
import {Switch} from "@mui/material";

function Home(){
  return (
      <div>
        <h2>Home</h2>
        home...
      </div>
  );
}

//실제로는 ajax 사용할 일이 많을 듯.
let contents = [
    {id:1, title:'HTML', description:'HTML is...'},
    {id:2, title:'JS', description:'JS is...'},
    {id:3, title:'REACT', description:'REACT is...'},
]

function Topic(){
    let params = useParams();
    console.log('params', params, params.topic_id);
    let topic_id = params.topic_id;
    let selected_topic = { //topic이 없을 때 나오는 것.
        title:'sorry',
        description:'Not Found'
    }
    for(let i=0; i<contents.length; i++){
        //아이디값이 문자열이기 때문에 숫자로 변경해준다.
        if(contents[i].id === Number(topic_id)){
            selected_topic = contents[i];
            break;
        }
    }
    return (
        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.description}
        </div>
    );
}

function Topics(){
    let list = [];
    for(let i=0; i<contents.length; i++){
        list.push(<li key={contents[i].id}><NavLink to={'/topics/'+contents[i].id}>{contents[i].description}</NavLink></li>)
    }
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                {list}
            </ul>
            {/*중첩라우팅을 사용하여 여러 컴포넌트를 보여줄 때,
            하위 컴포넌트를 넣어줄 위치를 outlet으로 지정한다.*/}
            <Outlet />
        </div>
    );
}
function Contact(){
  return (
      <div>
        <h2>Contact</h2>
        Contact...
      </div>
  );
}

function Exam03_routerDOM() {
    /*route는 routes 컴포넌트 내부에 선언되어야 한다. route에 컴포넌트는 element로 지정한다.*/
  return (
      //어떤 곳에서든 root 페이지에 있는 파일을 서비스할 수 있다면 BrowserRouter 사용
      //아닐 때 HashRouter 사용
      //HashRouter는 무엇인가? = #이 있으면 북마크, 웹서버는 그것을 무시함!
      //http://localhost:3000/#/contact
      //http://localhost:3000/topics/test/#/topics/test
      //이런 식으로 접속한 주소 # 다음에 요청한 url이 나옴.
      //필요하다면 이것도 사용할 수 있다.

      <BrowserRouter>
          <div>
              <h1>Hello Router</h1>
              {/*
                싱글페이지 애플리케이션에서 중요한 것은 Reload 되지 않고 비동기적으로 데이터 가져와서 페이지 생성
                => Link 사용 (ajax한 것과 같은 효과)

                NavLink는 선택하면 a태그에 class가 적용됨 (active)
                active 클래스에 스타일을 적용하면 선택한 a태그가 자동으로 바뀌어 보이도록 할 수 있다.
                */}
              <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/topics">Topics</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
              {/*원래는 exact없이 하면 topics이나 contact 눌렀을 때 home도 나오는데, v6이 되면서 하나만 나오는 듯함.
                Switch 사라짐. 가장 일치하는 라우트 기반 선택

                주소를 /topics/test로 하고 exact /topics로 route 지정하면 /topics랑 완전히 같지 않기 때문에 안 나옴.
                여러 주소를 사용하려려면 /topics/* 이렇게 사용하는 방법도 있음.
                */}
              <Routes>
                  {/*path /에 exact 꼭 없어도 됨. (맨 위에 있어서)*/}
                  <Route exact path="/" element={<Home />}></Route>
                  {/*topics 여러개라서 /*도 붙여줌.*/}
                  <Route path="/topics" element={<Topics />}>
                      <Route exact path=":topic_id" element={<Topic/>}></Route>
                      {/*이미 /topics인 상태*/}
                      {/*<Routes>*/}
                      {/*<Route path=":1" element={"HTML is...."}></Route>*/}
                      {/*<Route path=":2" element={"JS is...."}></Route>*/}
                      {/*<Route path=":3" element={"REACT is...."}></Route>*/}
                      {/*</Routes>*/}
                  </Route>

                  <Route path="/contact" element={<Contact />}></Route>
                  {/*not found를 어떻게 보여주어야 하지?
                    이렇게 하니까 아무 url 쳤을 때 not found 나옴.
                    switch와 같이 위에 적은 것부터
                    가장 적합한 route로 연결되는 것은 동일하게 적용되는 듯.*/}
                  <Route path="*" element={"Not Found"}></Route>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default Exam03_routerDOM;
