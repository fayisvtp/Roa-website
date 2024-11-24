import Link from 'next/link';

export const Card = ({ category }) => {
  const { name, image } = category;
  const whatsappNumber = "+918222899916"; // Replace with your WhatsApp number
  const encodedMessage = encodeURIComponent(`Hi! I'm interested in learning more about the product: ${name}`);

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
      className='top-categories__item'
      target='_blank'
      rel='noopener noreferrer'
    >
      <img src={image} className='js-img' alt='' />
      <div className='top-categories__item-hover'>
        <h5>{name}</h5>
        <span>browse products -</span>
        <i className='icon-arrow-lg'></i>
      </div>
    </a>
  );
};
