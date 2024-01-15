import { Inter } from 'next/font/google'
import './globals.css'
import GlobalState from './context/page'
import Navbar from './components/Navbar/page'
import Footer from './components/Footer/page'
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ONIN International Infosys',
  description: 'Website for puschase of Computers and its accessories',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body><GlobalState>
        <Navbar />
        <main>
          {children}
          <Analytics/>
        </main>
        <Footer/>
      </GlobalState>
      </body>
    </html>
  )
}
