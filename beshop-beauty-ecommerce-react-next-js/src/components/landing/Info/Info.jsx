import { PromoVideo } from 'components/shared/PromoVideo/PromoVideo';
import { useState } from 'react';
import Link from 'next/link';

export const Info = () => {
  const [play, setPlay] = useState(false);
  const url = play
    ? 'https://www.youtube.com/embed/Z1IIgzCxqoo'
    : '';
  return (
    <>
      {/* <!-- BEGIN INFO BLOCKS --> */}
      <div className='info-blocks'>
        <div
          className='info-blocks__item js-img'
          style={{ backgroundImage: `url('/assets/img/info-item-bg1.jpg')` }}
        >
          <div className='wrapper'>
            <div className='info-blocks__item-img'>
              <img
                src='/assets/img/info-item-img1.jpg'
                className='js-img'
                alt=''
              />
            </div>
            <div className='info-blocks__item-text'>
              <span className='saint-text'>Check This Out</span>
              <h2>Explore the New Collection of the Diamond World</h2>
              <span className='info-blocks__item-descr'>
              Discover the latest in diamond elegance with our new collection, crafted to shine.
              </span>
              <p>
              Step into a world of brilliance and beauty with our latest diamond collection. At ROA Diamond, we constantly strive to bring you the finest diamonds that redefine elegance and luxury. Each piece in our collection reflects unmatched craftsmanship and quality, making us the ultimate destination for wholesale diamond needs.
              </p>
              {/* <Link href='/shop'>
                <a className='btn'>
                  Shop now
                </a>
              </Link> */}
            </div>
          </div>
        </div>
        <div
          className='info-blocks__item info-blocks__item-reverse js-img'
          style={{ backgroundImage: `url('/assets/img/info-item-bg2.jpg')` }}
        >
          <div className='wrapper'>
            <div className='info-blocks__item-img'>
              <PromoVideo
                videoUrl={url}
                play={play}
                onVideoPlay={() => setPlay(true)}
                image='/assets/img/info-item-img2.jpg'
              />
            </div>
            <div className='info-blocks__item-text'>
              <span className='saint-text'>About Us</span>
              <h2>Who we are</h2>
              <span className='info-blocks__item-descr'>
              Welcome to ROA Diamond – Your Trusted Diamond Wholesale Partner in Kerala.
              </span>
              <p>
              Located in the vibrant city of Perinthalmanna, Malappuram, ROA Diamond has established itself as a leading wholesale diamond dealer across Kerala. Our unwavering commitment to quality and excellence has made us a trusted name among jewelers and businesses alike. We take pride in offering an extensive collection of ethically sourced, certified diamonds that cater to every style and occasion.
              </p>
              <Link href="https://www.instagram.com/reel/C_VVhdavmg6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" passHref>
  <a 
    className='info-blocks__item-link' 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className='icon-video'></i>
    Watch video about us
    <i className='icon-arrow-lg'></i>
  </a>
</Link>

            </div>
          </div>
        </div>
      </div>
      {/* <!-- INFO BLOCKS EOF   --> */}
    </>
  );
};
