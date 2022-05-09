import Navbar from '../components/Navbar';
import './Benefit.css'
import YieldFarming from '../components/Yieldfarming';
import Staking from '../components/Staking';
import Presale from '../components/Presale';

function Benefit() {
    return (
      <div className='benefit'>
        <Navbar/>
        <h1 className='benefit-header'>The Benefits of the Mountanaz Token </h1>
        <YieldFarming/>
        <Staking/>
        <Presale/>
      </div>
    );
  }
  
  export default Benefit;
  