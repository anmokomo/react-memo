import './App.css'
import { useState, memo, useMemo } from 'react'

function Swatch({ params }) {
  console.log('swatch rendered ', params.color)
  return (
    <>
      <div style={{ width: 75, height: 75, backgroundColor: params.color }}></div>
      <p>Swatch rendered {params.color}</p>
    </>
  )
}

const MemoedSwatch = memo(Swatch)

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0)
  const [color, setColor] = useState('red')
  console.log('App rendered index', appRenderIndex)
  
  //returns an object with that color, gets rerun when color changes
const params = useMemo(() => ({ color }), [color])

  return (
    <div className="App">
      <div>
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          Re-render App
        </button>
        <p>Render index: {appRenderIndex}</p>
        <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
          Change color
          </button>
        {/* <Swatch params={color} /> */}
        <MemoedSwatch params={params} />
        {/* <MemoedSwatch params={{ color }}/> */}
      </div>
    </div>
  );
}

export default App;
