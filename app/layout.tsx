import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Homework',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen bg-blue-200">
        <Navbar />
        <main className="h-[70%] bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
