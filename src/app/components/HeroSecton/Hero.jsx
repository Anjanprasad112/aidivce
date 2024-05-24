import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='d-flex justify-content-around py-4 md:flex-col'>
      <div className="card rounded" style={{width: `20rem`,border:`1px solid #0D6EFD`}}>
  <Image src="/medical-logo.png" width={`250`} height={`250`} className="card-img-top" alt="cardone"/>
  <div className="card-body">
    <h5 className="card-title">Medical Bot</h5>
    <p className="card-text">Get quick and accurate answers to your medical queries. Our Medical Bot is here to help you with all your health-related questions.</p>
    <Link href="https://aidvice-medical.streamlit.app/" className="btn btn-primary">Clear your medical queries</Link>
  </div>
</div>

<div className="card rounded" style={{width: `20rem`,border:`1px solid #0D6EFD`}}>
  <Image src="/carousel-img-1.png" width={`250`} height={`250`} className="card-img-top" alt="cardtwo"/>
  <div className="card-body">
    <h5 className="card-title">Legal Adviser</h5>
    <p className="card-text">Get legal advice from our expert Legal Adviser. We can help you navigate through any legal challenges you may face.</p>
    <Link href="https://aidvice-legal.streamlit.app/" className="btn btn-primary">Visit Our Legal Adviser</Link>
  </div>
</div>

<div className="card rounded" style={{width: `20rem`,border:`1px solid #0D6EFD`}}>
  <Image src="/carousel-img-3.jpg" width={`250`} height={`250`} className="card-img-top" alt="cardthree"/>
  <div className="card-body">
    <h5 className="card-title">Career Guidance</h5>
    <p className="card-text">Looking for career advice? Our Career Guidance bot helps you navigate through career choices and provides valuable insights.</p>
    <Link href="https://aidvice-career.streamlit.app/" className="btn btn-primary">Explore Career Options</Link>
  </div>
</div>
    </div>
  )
}

export default Hero