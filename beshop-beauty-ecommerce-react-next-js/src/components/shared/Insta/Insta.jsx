import { Card } from './Card/Card';

const instaData = [
  {
    image: '/assets/img/insta-photo1.jpg',
    link: '#/',
    id: '1',
  },
  {
    image: '/assets/img/insta-photo2.jpg',
    link: 'https://www.instagram.com/p/DBYfxhFzwAK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    id: '2',
  },
  {
    image: '/assets/img/insta-photo3.jpg',
    link: 'https://www.instagram.com/p/DBYiDRsT3R4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    id: '3',
  },
  {
    image: '/assets/img/insta-photo4.jpg',
    link: 'https://www.instagram.com/p/DBlNTtrz57H/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    id: '4',
  },
  {
    image: '/assets/img/insta-photo5.jpg',
    link: 'https://www.instagram.com/p/DBlN92aTGPM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    id: '5',
  },
  {
    image: '/assets/img/insta-photo6.jpg',
    link: 'https://www.instagram.com/p/DBlOLsxTzTe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    id: '6',
  },
];

export const Insta = () => {
  return (
    <>
      {/* <!-- BEGIN INSTA PHOTOS --> */}
      <div className='insta-photos'>
        {instaData.map((insta) => (
          <Card key={insta.id} insta={insta} />
        ))}
      </div>
      {/* <!-- INSTA PHOTOS EOF   --> */}
    </>
  );
};
