import { Link, useMatch } from 'react-router-dom'

export default function RegisterHeader() {
  const isRegister = useMatch('/register')
  console.log(isRegister)
  return (
    <header className='py-5'>
      <div className='container'>
        <nav className='flex items-end'>
          <Link to='/'>
            <svg
              className='h-8 fill-pink-600 lg:h-11'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              fill='#000000'
              width='100px'
              height='50px'
              viewBox='0 0 512 512'
              version='1.1'
              xmlSpace='preserve'
            >
              <g id='bird_love-bird-heart-love-valentine'>
                <path d='M210.239,161.63c-11.85-11.979-13.889-31.229-3.614-44.605c12.414-16.161,35.529-17.243,49.375-3.245   c13.847-13.998,36.961-12.917,49.375,3.245c10.275,13.376,8.235,32.626-3.614,44.605l-32.5,32.855   c-7.318,7.398-19.204,7.398-26.522,0L210.239,161.63z M130.272,174.126c3.14,3.22,8.315,3.22,11.455,0l19.952-20.46   c7.017-7.196,8.387-18.749,2.104-26.593c-7.145-8.922-20.021-9.403-27.784-1.442c-7.763-7.96-20.64-7.479-27.784,1.442   c-6.283,7.845-4.913,19.397,2.104,26.593L130.272,174.126z M370.272,174.126c3.14,3.22,8.315,3.22,11.455,0l19.952-20.46   c7.017-7.196,8.387-18.749,2.104-26.593c-7.145-8.922-20.021-9.403-27.784-1.442c-7.763-7.96-20.64-7.479-27.784,1.442   c-6.283,7.845-4.913,19.397,2.104,26.593L370.272,174.126z M468.72,408h-31.44c-8.48,0-16.64-3.36-22.64-9.36L408,392   c-36.56,25.04-85.76,20.48-117.12-10.88C259.52,349.76,254.96,300.56,280,264c-2.96-7.92-4-16.24-3.12-24.32   c0-0.006,0.002-0.012,0.003-0.018L256,223.966l28.838-7.175l-0.109,0.315c6.446-10.327,16.483-18.683,29.512-22.866   c12.96-4.16,27.44-2.96,39.52,3.28c25.653,13.224,35.246,42.292,25.851,66.778l84.366,84.366   c4.609,4.605,5.969,11.469,3.477,17.484c-2.099,5.073-6.62,8.462-11.878,9.426l18.745,18.745C479.36,399.36,475.84,408,468.72,408z    M320,232c0-4.4-3.6-8-8-8s-8,3.6-8,8s3.6,8,8,8S320,236.4,320,232z M452.789,359.996L376,283.309l-11.547,11.547   c-6.68,6.688-10.344,15.59-10.313,25.063c0.031,9.484,3.766,18.371,10.516,25.027c4.609,4.551,10.711,7.055,17.188,7.055h14.844   l-26.344-26.344c-3.125-3.125-3.125-8.188,0-11.313s8.188-3.125,11.313,0l39.779,39.702c4.418,3.835,10.037,5.955,15.846,5.955   L452.789,359.996z M227.162,216.791L256,223.966l-20.883,15.696c0,0.006,0.002,0.012,0.003,0.018c0.88,8.08-0.16,16.4-3.12,24.32   c25.04,36.56,20.48,85.76-10.88,117.12C189.76,412.48,140.56,417.04,104,392l-6.64,6.64c-6,6-14.16,9.36-22.64,9.36H43.28   c-7.12,0-10.64-8.64-5.6-13.68l18.745-18.745c-5.257-0.965-9.78-4.354-11.882-9.426c-2.492-6.016-1.125-12.879,3.48-17.484   l84.366-84.366c-9.395-24.487,0.198-53.555,25.851-66.778c12.08-6.24,26.56-7.44,39.52-3.28   c13.028,4.183,23.066,12.539,29.512,22.866L227.162,216.791z M157.859,319.914c0.031-9.473-3.633-18.371-10.316-25.059L136,283.313   l-76.664,76.664L74.719,360c5.838,0,11.493-2.135,15.916-6.006l0.615-0.584l39.094-39.066c3.125-3.125,8.188-3.125,11.313,0   s3.125,8.188,0,11.313L115.279,352h14.881c6.469,0,12.57-2.504,17.184-7.055C154.094,338.289,157.828,329.398,157.859,319.914z    M208,232c0-4.4-3.6-8-8-8s-8,3.6-8,8s3.6,8,8,8S208,236.4,208,232z' />
              </g>
              <g id='Layer_1' />
            </svg>
          </Link>
          <div className='ml-5 text-xl text-blue-600 lg:text-2xl'>{isRegister ? 'Đăng ký' : 'Đăng nhập'}</div>
        </nav>
      </div>
    </header>
  )
}