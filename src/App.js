import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from 'react'

function App() {
  console.log('saul >>>>>> 网页 APP 打印', window.chrome, window)
  const [userText, setUserText] = useState('');
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

      setSelectedText(sel)

      // alert(sel);
      window.chrome.runtime.sendMessage({
        action: 'send_word',
        content: sel,
      }, res => {
        console.log('res jjjjjjj ======', res)
      })
    };



    return () => {
      // window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);



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

export default App;
