
import Body from './Components/Body'
import toast, { Toaster } from 'react-hot-toast';
import MovieDialog from './Components/MovieDialog';

function App() {
  return (
    <div >
      <Toaster></Toaster>
      {/* above toaster is from react-hot-toast */}
      <Body></Body>
      <MovieDialog />
    </div>
  );
}

export default App;
