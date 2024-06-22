import CurrentTimeTimer from "./ReactCodes/timer/currentTimeTimer";
import { Props } from "./ReactCodes/props";

function App() {
  const country = "India";

  return (
    <>
      <Props country={country} />
      <CurrentTimeTimer />
    </>
  );
}

export default App;
