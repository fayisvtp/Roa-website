import { Categories } from 'components/Category/Categories/Categories';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import categoriesData from 'data/category/category';

export const TopCategories = () => {
  const categories = [...categoriesData].slice(0, 3);
  return (
    <>
      {/* <!-- BEGIN TOP CATEGORIES --> */}
      <section className='top-categories'>
        <SectionTitle
          subTitle='Top Picks for You'
          title='top categories'
          body='Browse our top categories for timeless styles and trending favorites. Curated for elegance and quality, find your perfect match today.'
        />
        <div className='top-categories__items'>
          {<Categories categories={categories} />}
        </div>
      </section>
      {/* <!-- TOP CATEGORIES EOF   --> */}
    </>
  );
};
