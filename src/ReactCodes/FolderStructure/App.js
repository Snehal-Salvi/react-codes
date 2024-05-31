 
import data from "./data.js";
import Folder from "./Folder";

export default function App() {
  return (
    <div className="App">
      <ul>
        {data.map((item) => (
          <Folder key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
}