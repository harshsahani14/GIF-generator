import logo from './logo.svg';
import './App.css';
import { Random } from './Components/Random';
import { Generate } from './Components/Generate';

function App() {
  return (
    <div className=" flex flex-col items-center gap-y-6 bg-[#AEDCE6] h-max[1000px] ">
      
      <h1  className=' mt-4 w-[95%]  bg-white h-[50px] rounded-md flex items-center justify-center font-bold text-[25px] py-6'> Random GIFS</h1>

      <div className='w-full flex flex-col items-center mt-4'>

        <Random></Random>
        <Generate></Generate>
      </div>
      
    </div>
  );
}

export default App;
