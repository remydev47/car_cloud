'use client';
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import React from 'react'
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { manufacturers } from '@/constants';

const SearchManufacturer = ({
  manufacturer, setManufacturer
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('')

  // filter the manufacturer according with the query string

  const filteredManufacturers = query === "" 
  ? manufacturers 
  : manufacturers.filter((item) => (
    item.toLocaleLowerCase()
    .replace(/\s+/g, "")
    .includes(query.toLowerCase().replace(/\s+/g, ""))
  ))

  return (
    <div className='search-manufacturer'>
      <Combobox
       value={manufacturer} 
       onChange={setManufacturer}
      >
        <div className='relative w-full'>
          <Combobox.Button className="absolute top-[14px]">
            <Image src='/car-logo.svg' className='ml-4' width={20} height={20} alt='Car Logo'/>
          </Combobox.Button>

          <Combobox.Input 
             className="search-manufacturer__input"
             placeholder='VolksWagen'
             displayValue={(manufacturer: string) => manufacturer}
             onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            afterLeave={( ) => setQuery('')}  
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && 
              query !== "" ? (
                <Combobox.Option
                 value={query}
                 className="search-manufacturer__options"
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({active}) => `
                    relative search-manufacturer__option
                    ${active ?'bg-primary-blue text-white' : 'text-gray-900' }
                    `}
                    value={item}
                  >
                   {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>

        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer