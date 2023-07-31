import React, { useEffect, useRef, useState } from 'react'
import {GoChevronDown} from 'react-icons/go'
import Panel from './Panel'

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef()
    
    useEffect(() => {
        const handler = (event) => {
            // console.log(divEl.current)
            // if the element is not visible
            if (!divEl.current) {
                return
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        // true - capturing
        document.addEventListener('click', handler, true)
        
        return () => {
            document.removeEventListener('click',handler)
        }
    }, [])
    
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    // or
    // const handleClick = () => {
    //     setIsOpen((currentIsOpen)=>!currentIsOpen)
    // }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onChange(option)
    }

    const renederedOptions = options.map((option) => {
        return (
            <div
                className='hover:bg-sky-100 rounded cursor-pointer p-1'
                onClick={() => handleOptionClick(option)}
                key={option.value}
            >
                {option.label}
            </div>
        )
    })

    // let content = 'Select....'
    // if (selection) {
    //     content = selection.label
    // }
    
    return (
        // <div className='w-48 relative'>
        //     <div className='flex justify-between items-center 
        //         cursor-pointer border rounder p-3 shadow bg-white w-full'
        //         onClick={handleClick}>
        //         {value?.label || 'Select...'}
        //         <GoChevronDown className='text-lg' />
        //     </div>
        //     {/* <div onClick={handleClick}>{content}</div> */}
        //     {isOpen && (
        //         <div className='absolute top-full border 
        //             rounder p-3 shadow bg-white w-full'>
        //             {renederedOptions}
        //         </div>
        //     )}
        // </div>
        
        // panel- reusable
        
        <div ref={divEl} className='w-48 relative'>
            <Panel className='flex justify-between items-center 
                cursor-pointer'
                onClick={handleClick}>
                {value?.label || 'Select...'}
                <GoChevronDown className='text-lg' />
            </Panel>
            {/* <div onClick={handleClick}>{content}</div> */}
            {isOpen && (
                <Panel className='absolute top-full'>
                    {renederedOptions}
                </Panel>
            )}
        </div>
    )
}

export default Dropdown