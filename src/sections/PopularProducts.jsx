import { Link } from 'react-router-dom';
import { honey4,honey5,honey6,honey7 } from '../assets/images';
import PopularProductCard from '../components/PopularProductCard';

const PopularProducts = () => {
  const products = [
    {
      imgURL: honey4,
      name: "Wildflower Honey",
      price: '$200.20'
    },
    {
      imgURL: honey5,
      name: "Lemon Honey",
      price: '$210.20'
    },
    {
      imgURL: honey6,
      name: "Clover Honey",
      price: '$210.20'
    },
    {
      imgURL: honey7,
      name: "Orange Blossom Honey",
      price: '$210.20'
    }
  ]
  console.log(products);
  return (
    <section id="products" className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-mono font-bold'>Our <span className='text-yellow-500'>Popular</span> Products</h2>
        <p className='lg:max-w-lg mt-2 font-mono text-slate-gray'>Discover the sweet world of honey with our most-loved products! From the purest wildflower honey to delightful flavored options like lemon and cinnamon, our collection is crafted to bring nature's best to your table.</p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 grid-cols-1 gap-14'>
        {
          products.map((product) => (
            <Link to='product-overview'  key={product.name}  state={{ imgURL:product.imgURL, name:product.name, price:product.price }}>
             <PopularProductCard key={product.name} {...product} />
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default PopularProducts;
