import { FiSearch } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';

type TextFieldProps = {
  name: string
  id: string
  placeholder: string
  styles: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField = ( props: TextFieldProps ) => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <input
        type="text"
        name={ props.name }
        id={ props.id }
        dir='rtl'
        className={`flex-1 w-full outline-none border-none focus:placeholder:opacity-0 ${props.styles} `}
        placeholder={ props.placeholder }
        onChange={ props.handleChange }
      />

      {
        props.name === 'location'
        ? <MdLocationOn className='text-white bg-gray-900 text-[22px]' />
        : <FiSearch className='text-black text-[22px]' />
      }
    </div>
  )
}

export default TextField
