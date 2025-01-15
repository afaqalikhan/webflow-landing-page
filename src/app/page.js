import { Ubuntu } from '@next/font/google';
import Hero from "./Section/Hero";

 // code for font
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Choose weights you want to use
  // variable: '--font-ubuntu',     
  // Optional: Create a CSS variable
});

function App ({ Component, pageProps }) {
  return (
    <main className={ubuntu.className}>
      <Component {...pageProps} />
    </main>
  );
};

 //  code for font


function Page() {
  return (
    <>
     <Hero />
    </>
  );
};

export default Page;