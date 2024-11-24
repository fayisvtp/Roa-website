import Link from 'next/link';

export const Discount = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount js-img'
        style={{ backgroundImage: `url('/assets/img/discount-bg.jpg')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span className='saint-text'>Discover &</span>
            <span className='main-text'>
              Get <span>100%</span> pure
            </span>
            <p>
            When it comes to diamonds, purity and authenticity matter the most. At ROA Diamond, we guarantee 100% pure, certified diamonds that exceed industry standards. Our commitment to transparency and quality ensures you receive only the best for your business or personal needs. Trust us to deliver brilliance, one diamond at a time.
            </p>

            {/* <a
  href="https://wa.me/918547607613?text=Hi!%20I%20would%20like%20to%20talk%20with%20you."
  className="btn"
  target="_blank"
  rel="noopener noreferrer"
>
  Talk with us!
</a> */}

          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
