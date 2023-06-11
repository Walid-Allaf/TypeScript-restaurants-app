import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { MdDeliveryDining, MdCurrencyLira } from 'react-icons/md';

type CardsProps = {
  id?: string
  name: string
  img: string
  paymentMethod: string
  paymentImg?: string
  rate: number
  time: string
  delivery: number
  lowest: string
  location: string
}

const Cards = ( props: CardsProps ) => (
  <div className='flex flex-col xs:flex-row-reverse w-full shadow-md rounded-xl overflow-hidden max-w-sm'>

    <div className='flex-[1.5] overflow-hidden relative rounded-xl overlay'>
      <img src={ props.img } alt="restaurantImg" className='w-full object-contain' />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between p-3 text-white bg-[#0000004d]'>

        <div className='flex items-center justify-between text-[18px]'>
          <AiOutlineHeart className='text-[22px]' />
          <p className='font-bold'>{ props.name }</p>
        </div>

        <div className='w-fit bg-white p-2 rounded-md'>
          <img src={ props.paymentMethod } alt="payment method" className='w-[40px] h-[20px] object-contain' />
        </div>

      </div>

    </div>

    <div className='flex-[0.5] flex flex-col justify-between items-end gap-1 p-4 text-[14px] font-bold text-gray-600'>

      <div className="flex items-center gap-1">
        <p>{ Number(props.rate).toFixed(1) }</p>
        <AiFillStar className='text-red-500' />
      </div>

      <div className="flex items-center gap-1">
        <p>{ props.time }</p>
        <BiTimeFive className='text-red-500' />
      </div>

      <div className="flex items-center gap-1">
          {
            props.delivery ? props.delivery : <p className='py-1 px-2 text-[14px] rounded-full text-white bg-green-600'>مجاناً</p>
          }
        <MdDeliveryDining className='text-red-500' />
      </div>

      <div className="flex items-center gap-1">
        <p>الأدنى { props.lowest }</p>
        <MdCurrencyLira className='text-red-500' />
      </div>

    </div>
  </div>
)


export default Cards
