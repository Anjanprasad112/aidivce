import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='d-flex justify-content-around m-4'>
<div className="card" style={{width: `18rem`, color : 'white'}}>
  <div className="card-body">
    <h5 className="card-title">Medical Bot</h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="https://aidvice-medical.streamlit.app/" target="_blank" className="card-link">Clear your medical queries</Link>
  </div>
</div>
<div className="card" style={{width: `18rem`, color : 'white'}}>
  <div className="card-body">
    <h5 className="card-title">Financial Bot</h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="https://aidvice-medical.streamlit.app/" target="_blank" className="card-link">Need any financial help?</Link>
  </div>
</div>
<div className="card" style={{width: `18rem`, color : 'white'}}>
  <div className="card-body">
    <h5 className="card-title">Legal Adviser</h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="https://aidvice-medical.streamlit.app/" target="_blank" className="card-link">Visit Our Legal Adviser</Link>
  </div>
</div>
    </div>
  )
}

export default Hero