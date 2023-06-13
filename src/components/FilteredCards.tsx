import React, { useState } from 'react';
import { RestaurantsInfo } from '../fake data';
import Cards from './Cards';
import TextField from './form/TextField';
import ButtonWithIcon from './form/ButtonWithIcon';
import LeafletMap from './LeafletMap';

const Filters = () => {

  const options = [
    { name: "Paypal", id: "paypal" },
    { name: "Visa", id: "visa" },
    { name: "Credit Card", id: "creditCard" },
  ];

  type FieldsState = {
    searchLocation: string
    searchName: string
    freeDelivery: (unknown | boolean)
    paymentMethod: string
    rateValue: (unknown | number)
  }
  
  const [expandPay, setExpandPay] = useState(false);
  const [expandRate, setExpandRate] = useState(false);
  const [fieldsState, setFieldsState] = useState<FieldsState>({searchLocation: '', searchName: '', freeDelivery: null, paymentMethod: '', rateValue: null});

  type Event = {
    target:
      { value: string}
  }

  const handleSearch = ( card: React.ComponentProps<typeof Cards> ) => {
    if (fieldsState.searchLocation === "" && fieldsState.searchName === "" && fieldsState.freeDelivery === null && fieldsState.paymentMethod === '' && (fieldsState.rateValue === (null) || fieldsState.rateValue === (0))) {
      return card;
    } else if (card.location.toLowerCase().includes(fieldsState.searchLocation.toLowerCase()) && fieldsState.searchLocation !== "") {
      return card;
    } else if (card.name.toLowerCase().includes(fieldsState.searchName.toLowerCase()) && fieldsState.searchName !== "") {
      return card;
    } else if (fieldsState.freeDelivery === !Boolean(card.delivery)) {
      return card;
    } else if (fieldsState.paymentMethod === card.paymentMethod) {
      return card;
    } else if (Number(Number(fieldsState.rateValue).toFixed(1)) === Number(Number(card.rate).toFixed(1))) {
      return card;
    } else {
      return false;
    }
  }

  return (
    <section className='flex flex-col flex-wrap items-center justify-center gap-3 pt-6 blue'>

      {/* Input Search By Location */}
      <div className='px-6 sm:px-16 w-full flex justify-center'>
        <div className='py-2 px-4 rounded-2xl font-bold text-white bg-gray-900 w-full xs:max-w-[250px]' >

          <TextField name='location' id='location' placeholder='العنوان' styles='bg-gray-900 focus:text-start placeholder:text-white text-center'
            handleChange={(e: Event) => setFieldsState({searchLocation: e.target.value, searchName: '', freeDelivery: null, paymentMethod: '', rateValue: null})}
          />

        </div>
      </div>

      {/* Input Search By Name */}
      <div className='px-6 sm:px-16 w-full flex justify-center'>
        <div className='py-2 px-4 rounded-full font-bold text-gray-600 bg-white w-full xs:max-w-[250px] shadow-sm shadow-slate-50' >
          
          <TextField name='name' id='name' placeholder='ابحث عن مطعمك المفضل' styles='placeholder:text-gray-400 placeholder:font-light'
            handleChange={(e: Event) => setFieldsState({searchLocation: '', searchName: e.target.value, freeDelivery: null, paymentMethod: '', rateValue: null})}
          />

        </div>
      </div>

      <div className='flex flex-row items-center justify-center gap-4 select-none max-w-full'>
        <div className='flex flex-row flex-wrap items-center justify-center gap-1 xs:gap-3'>

        {/* Free Delivery */}
        <p className={`min-w-[110px] max-w-[130px] h-[42px] flex flex-1 items-center justify-center p-2 rounded-full border border-gray-500 cursor-pointer font-bold ${fieldsState.freeDelivery ? 'bg-green-600 text-white' : 'bg-teal-50 text-teal-900'}`}
          onClick={() => setFieldsState({searchLocation: '', searchName: '', freeDelivery: !fieldsState.freeDelivery, paymentMethod: '', rateValue: null})}
        >
          توصيل مجاني</p>


        {/* The Rate */}
        <div className='relative'>
          <ButtonWithIcon styles='' title='التقييم' icon='star' handleClick={() => {setExpandRate(!expandRate); setExpandPay(false)}} />
          <input
            className={`${expandRate ? 'flex flex-col absolute top-[120%] left-1/2 -translate-x-1/2 z-50 bg-teal-50 text-gray-600 border border-gray-500 w-[115px] outline-none rounded-lg p-2' : 'hidden'}`}
            onChange={(e) => setFieldsState({searchLocation: '', searchName: '', freeDelivery: null, paymentMethod: '', rateValue: Number(e.target.value)})}
            type="number"
            name="rate"
            id="rate"
            min={ 0 }
            max={ 5 }
            step={ 0.1 }
          />
        </div>

        {/* Payment Methods */}
        <div className='relative'>
          <ButtonWithIcon styles='min-w-[140px] h-[42px]' title='طرق الدفع' icon='card' handleClick={() => {setExpandPay(!expandPay); setExpandRate(false)}} />
          <div className={`${expandPay ? `flex flex-col absolute top-[120%] left-1/2 -translate-x-1/2 z-50 bg-teal-50 text-gray-600 border border-gray-500 w-[140px] rounded-lg p-2` : 'hidden'}`}>
            {
              options.map(( option ) => (
                <p key={ option.id } className='py-1 px-2 hover:bg-green-600 hover:text-white rounded-lg cursor-pointer'
                  onClick={() => {setFieldsState({searchLocation: '', searchName: '', freeDelivery: null, paymentMethod: option.id, rateValue: null}); setExpandPay(!expandPay)}}
                >
                  { option.name }
                </p>
              ))
            }
          </div>
        </div>

        </div>
      </div>


      <section className="w-full flex flex-row flex-wrap items-center justify-center gap-4 lg:gap-8 pb-2 overflow-hidden px-6 sm:px-16">
      {
        RestaurantsInfo.filter((card) => handleSearch( card )).map(( item ) => {
          return (
            // Cards Component
            <Cards key={ item.id } name={ item.name } img={ item.img } paymentMethod={ item.paymentImg} rate={ item.rate } time={ item.time } delivery={ item.delivery } lowest={ item.lowest } location={ item.location } />
          )
        })
      }
        <LeafletMap />
      </section>
    </section>
  )
}

export default Filters;

