'use client'
import Link from 'next/link';
import './App.css';
import withSplashScreen from '@/components/splashscreen/withSplashScreen';

function App() {
  return (
    <div className="App">
      <div Class='text-9xl text-center font-serif italic text-red-700'>
        <br/>
        <br/>
        <br/>
      <Link href="/login">Lets Get Started!</Link>
      </div>
    </div>
  );
}

export default withSplashScreen(App);