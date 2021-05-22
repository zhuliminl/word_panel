import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  MemoryRouter
} from "react-router-dom";
import styles from './styles'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import api from './utils/api'


function App() {
  console.log('saul >>>>>> 网页 APP 打印', window.chrome, window)

  const [userText, setUserText] = useState('xx');
  const [textSelected, setSelectedText] = useState('')

  const handleUserKeyPress = useCallback(event => {
    const { key, keyCode } = event;

    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setUserText(prevUserText => `${prevUserText}${key}`);
    }
  }, []);

  const messagesFromReactAppListener = (data, data1) => {
    console.log('saul DDDDDDDDDDDDDDDDDDDDDD', data, data1)
  }

  useEffect(() => {
    // window.addEventListener('keydown', handleUserKeyPress);


    document.ondblclick = function () {
      const _document = document
      const selection = _document.selection
      var sel = (selection && selection.createRange().text) ||
        (window.getSelection && window.getSelection().toString());
      console.log('saul sel', sel)

      setSelectedText(sel)

      api.get('/users').then(res => {
        console.log('saul get users', res)
      }).catch(err => {
        console.log('saul api get error', err)
      })

      // alert(sel);
      // window.chrome.runtime.sendMessage({
      //   action: 'send_word',
      //   content: sel,
      // }, res => {
      //   console.log('res jjjjjjj ======', res)
      // })

    };



    return () => {
      // window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const state = useSelector(state => state)
  console.log('saul >>>>>>sate', state)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getUser())
  }, [])

  const [isShowModal, setShowModal] = useState(false)

  const modalStyles = {
    overlay: {
      // display: 'fixed'
    },
  };

  return (
    <MemoryRouter>
      <div style={{
        fontSize: 90,
        fontFamily: 'Novus-Regular'
      }}>{state.word.name}</div>
      <div>
        <nav>
          <div
            onClick={() => {
              setShowModal(!isShowModal)
            }}
          >
            modal 显示{textSelected}
          </div>
          <div
            onClick={() => {
              // dispatch({ type: 'word/change', payload: 'xxxxxxx' })
              dispatch(getUser())
            }}
          >
            该点点滴滴
          </div>
          <ul>
            <li>
              <Link to="/" style={styles.container}>Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>


        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </MemoryRouter>
  )

  return (
    <div className="App">
      <div style={{
        fontSize: 30,
        color: 'red'
      }}>小石头</div>
      <h1>{textSelected}</h1>
      {userText}
    </div>
  );
}

function getUser() {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: 'word/change', payload: 'fuck' })
    }, 1000);
  }
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}



export default App;
