import './css/index.css'
import Introduction from './components/Introductions'
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div className="p-10">
      <Welcome />
      <Introduction/>
      <Introduction name={"Justine"}/>
    </div>
  );
}

export default App;