import React from "react";
// import { Jumbotron } from "reactstrap";
// import { formatEther } from '@ethersproject/units'
import Button from "../Components/Button"
import './HomePage.css'

export default function HomePage() {
  // const etherBalance = useEtherBalance(account);
  return (
    //   <div>
    //   <Jumbotron>
    //     <h4>
    //       <center>
    //         Welcome to our marketplace - <h1>CryptoPlace 🚀</h1>
    //       </center>
    //     </h4>
    //   </Jumbotron>
    // </div>
    <div className='HomePage'>
      <div className='main-component'>
        <div className='title'>
          The place for NFT collectibles
        </div>
        <div className='subtitle'>
          Buy, sell, and discover unique and rare items
        </div>
        <div className='buttons'>
          <Button
            label='Explore'
            onClick={() => console.log('hi')}
            style={{ 'float': 'none', 'marginRight': '20px' }}
            href='/browse'
          />
          <Button
            label='Create'
            onClick={() => console.log('hi')}
            style={{ 'float': 'none' }}
            href='/create-collectible'
          />
        </div>
      </div>
      <div className='carousel'>
        {/* {account && <p>Account: {account}</p>}
        {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>} */}
        {/* <Button label="deactivate" onClick={() => { deactivate() }} /> */}
      </div>
    </div>
  );
}
