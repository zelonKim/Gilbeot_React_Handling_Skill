/* import ColorBox from "./components/ColorBox";

function App() {
  return (
    <div>
      <ColorBox />
    </div>
  );
}

export default App; */

//////////////

/* import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

function App() {
  return (
    <ColorContext.Provider value={{ color: 'red'}}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}
export default App; */


////////////////////


/* import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";

function App() {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
}
export default App; */

//////////////

import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from './components/SelectColors'

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  )
}
export default App;