import Image from "next/image";
import './main.css';
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className = 'nav-section-1'>
        <nav className="inactive-nav">Home</nav> &gt; <nav className="inactive-nav"> Product</nav> &gt; <span className="active-nav">Video Dubber - Fast Video Translator</span>
      </div>
      <Image src="/producthuntlogo.avif" className='producthuntlogo' alt="Video Dubber" width={72} height={72} />
      <div className="product-section">
      <div className="main-title">VideoDubber - Fast Video Translator</div>
      <div className = 'sub-title'>Translate videos in your own voice, globalize in a click!
      <div className="buttons-section">
      
        <div className="visit-button">Visit
        <div className="dropdown">
        <div className='dropdown-content'>
        <Link href='/' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none'}} ><div><span className="dropdown-main">Website</span> <span className="dropdown-sub">videodubber.ai</span></div></Link>
        <Link href='/' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none'}}><div><span className="dropdown-main">Learn More</span> <span className="dropdown-sub">videodubber.ai</span></div></Link>
        <Link href='/' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none'}}><div><span className="dropdown-main">Learn More</span> <span className="dropdown-sub">videodubber.ai</span></div></Link>
        <Link href='/' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none'}} ><div><span className="dropdown-main">Learn More</span><span className="dropdown-sub">videodubber.ai</span></div></Link>
        </div>
        </div>
        </div>  
        <button className="upvote-button">UPVOTE<span className="vote-count">140</span></button>
      </div></div>
      </div>
      

    </>
  );
}
