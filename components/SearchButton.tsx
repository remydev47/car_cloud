'use client';
import React from 'react'
import Image from 'next/image';
import { useState } from 'react'

const SearchButton = ({ otherClasses}: {otherClasses: string }) => {
  return (
    <button type='submit'
     className={`-ml-3 z-10 ${otherClasses}`}
    >
        <Image src='/magnifying-glass.svg' alt="magnifying glass" className="object-contain" width={40} height={40} />
    </button>
  )
}

export default SearchButton