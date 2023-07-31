// import React, { useContext } from 'react'
// import NavigationContext from '../context/navigation'
import classNames from 'classnames'
import useNavigation from '../hooks/use-navigation'

function Link({ to, children, className, activeClassName }) {

    // const { navigate } = useContext(NavigationContext)
    // or custom hook
    const { navigate, currentPath } = useNavigation()
    
    const classes = classNames(
        'text-blue-500',
        className,
        currentPath === to && activeClassName
    )
    
    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey)
            return
        e.preventDefault()
        navigate(to)
    }
    return (
        <a className={classes} href={to} onClick={handleClick}>{children}</a>
  )
}

export default Link