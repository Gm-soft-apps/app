import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './globals.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-secondary-subtle'>
        <div id='root' className='d-sm-none'>{children}</div>
        <div id='no-desktop' className='h-100 d-none d-sm-flex justify-content-center align-items-center'><h2><span className='bg-white text-dark px-2'>Please Visit in</span><span className='bg-dark text-white px-2'>Mobile Phone</span></h2></div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}