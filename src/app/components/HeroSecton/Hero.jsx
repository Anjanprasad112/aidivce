import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='d-flex justify-content-around py-4 md:flex-col'>
      <div className="card rounded" style={{width: `20rem`,border:`1px solid #0D6EFD`}}>
  <Image src="/medical-logo.png" width={`300`} height={`250`} className="card-img-top" alt="cardone"/>
  <div className="card-body">
    <h5 className="card-title">Get Expert Medical Answers</h5>
    <p className="card-text">Don&apos;t wait to see a doctor for minor health concerns. Get quick and accurate answers to your medical queries. Our AI-powered Medical Bot can answer your questions and provide trusted medical information.</p>
    <Link href="https://aidvice-medical.streamlit.app/" target='_blank' className="btn btn-primary">Get Help Now</Link>
  </div>
</div>

<div className="card rounded" style={{width: `20rem`,border:`1px solid #0D6EFD`}}>
  <Image src="/carousel-img-1.png" width={`300`} height={`250`} className="card-img-top" alt="cardtwo"/>
  <div className="card-body">
    <h5 className="card-title">Your Financial Assistant</h5>
    <p className="card-text">Take control of your finances with our Finance Bot. Get personalized advice, manage your budget and expenses, track investments, and ask questions about saving, investing, loans, and more.</p>
    <Link href="http://localhost:8501/" target='_blank' className="btn btn-primary">Get Started with Your Finances</Link>
  </div>
</div>

<div className="card rounded" style={{width: `20rem`,border:`1px solid #0D6EFD`}}>
  <Image src="/logo-3.jpg" width={`300`} height={`250`} className="card-img-top" alt="cardthree"/>
  <div className="card-body">
    <h5 className="card-title">Get Everyday Help</h5>
    <p className="card-text">Simplify your life with our AI assistant. Ask questions, get directions, clear your queries, and access helpful resources. The General Bot is here to make your day easier.</p>
    <Link href="https://aidvice-career.streamlit.app/" target='_blank' className="btn btn-primary">Make Life Easier</Link>
  </div>
</div>
    </div>
  )
}

export default Hero
