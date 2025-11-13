import ChatBot from './components/Chatbot';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';


export const metadata = {
  title: 'My Portfolio',
  description: 'Built with Next.js and Material UI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <ChatBot /> 
        <Footer/> 
      </body>
    </html>
  );
}
