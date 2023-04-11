import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='bg-primary'>{children}</div>
      <Footer />
    </>
  );
}
