import { AiFillStar } from 'react-icons/ai';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';

type ButtonWithIconProps = {
  styles: string
  title: string
  handleClick: () => void
  icon: string
}

const ButtonWithIcon = ( props: ButtonWithIconProps ) => {
  return (
    <div
      className={`bg-teal-50 p-2 rounded-full border border-gray-500 font-bold cursor-pointer text-teal-900 flex flex-1 items-center justify-between gap-2 ${props.styles}`}
      onClick={ props.handleClick }
      >
      <MdKeyboardArrowDown className='text-black font-medium' />
      <p>{ props.title }</p>
      {
        props.icon === 'star'
        ? <AiFillStar className='text-black' />
        : <BsFillCreditCard2BackFill className='text-black' />
      }
      
    </div>
  )
}

export default ButtonWithIcon
