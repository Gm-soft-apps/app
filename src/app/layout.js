import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className='bg-secondary-subtle'>
        <div id='root' className='d-sm-none'>{children}</div>
        <div id='no-desktop' className='h-100 d-none d-sm-flex justify-content-center align-items-center'><h2><span className='bg-white text-dark px-2'>Please Visit in</span><span className='bg-dark text-white px-2'>Mobile Phone</span></h2></div>
      </body>
    </html>
  )
}