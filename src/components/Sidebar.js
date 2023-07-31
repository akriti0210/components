import React from 'react'
import Link from './Link'

function Sidebar() {
    const links = [
        { textToShow: 'Dropdown', path: '/' },
        { textToShow: 'Accordion', path: '/accordion' },
        { textToShow: 'Buttons', path: '/buttons' },
        { textToShow: 'Modal', path: '/modal' },
        { textToShow: 'Table', path: '/table' },
        { textToShow: 'Counter', path: '/counter' }
    ]

    const renderedLinks = links.map((link) => {
        return <Link
            key={link.textToShow}
            to={link.path}
            className='mb-3'
            activeClassName='font-bold border-l-4 border-blue-400 pl-2'
        >{link.textToShow}</Link>
    })

    return (
        <div className='sticky top-0 overflow-y-scroll flex flex-col items-start'>
            {renderedLinks}
        </div>
    )
}

export default Sidebar