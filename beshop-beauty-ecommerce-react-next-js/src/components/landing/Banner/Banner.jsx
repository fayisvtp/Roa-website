import Link from 'next/link';

export const Banner = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className='main-block load-bg'>
        <div className='wrapper'>
          <div className='main-block__content'>
            <span className='saint-text text-center'>Discover </span>
            <h1 style={{color:"#ffffff"}} className='main-text text-center'>Purity &amp; Quality</h1>
            {/* <p className='text-center'>
              Nourish your skin with toxin-free cosmetic products. With the
              offers that you can’t refuse.
            </p> */}

            {/* <Link className='btn btn-center' href='/shop'>
              <a className='btn'>Shop now</a>
            </Link> */}
          </div>
        </div>
        {/* <img
          className='main-block__decor'
          src='/assets/img/main-block-decor.png'
          alt=''
        /> */}
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
