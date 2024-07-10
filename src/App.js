import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App ">
  <div className="card relative bg-slate-800 shadow-md rounded-[20px] overflow-hidden h-[250px] w-full mob:w-[500px] mob:h-[320px]  m-2 ">
    <div className='flex  mob:mt-6'>
 <div className='wifi-icon h-[40px] w-[40px] mob:h-[50px] mob:w-[50px] mt-16 mr-2'>
  <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" id="Wifi">
  <g id="Wifi">
    <g stroke="#ffffff" strokeWidth="2" transform="translate(-1325 -2191)">
      <g  strokeLinecap="round" strokeLinejoin="round" transform="translate(1326 2192)" fill="#fffff" className="color000000 svgShape">
        <path d="M4 7.55a11 11 0 0114.08 0M.42 4c6.046-5.33 15.114-5.33 21.16 0M7.53 11.11a6 6 0 016.95 0" fill="#fff0" className="color000000 svgShape"></path>
      </g>
    </g>
  </g>
</svg>

 </div>
    <div className='chip-img h-[40px] w-[60px] mob:h-[60px] mob:w-[80px]  mt-16'></div>
    </div>
    <h2 className="cardNum w-full text-center text-2xl mob:tracking-wider tracking-normal mob:text-4xl mt-6 mob:mt-4   text-white">0000 0000 0000 0000</h2>
    <p className="cardNum2 tracking-widest text-white text-center mt-4 mob:mt-4 mob:text-2xl">00/00</p>
    <p className="cardNum3 tracking-widest text-white ml-6 mt-3 mob:mt-4 mob:text-2xl mb-5 ">KDV</p>
    <img className='viza-img absolute z-10 bottom-[20px] right-[13px] w-[100px] mob:w-[150px] ' src='https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-PNG-Image.png' alt='viza'/>
  </div>
</div>
  );
}

export default App;
