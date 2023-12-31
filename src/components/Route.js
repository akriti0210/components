// import React, { useContext } from 'react'
// import NavigationContext from '../context/navigation'
import useNavigation from '../hooks/use-navigation'

function Route({ path, children }) {
    // const { currentPath } = useContext(NavigationContext)
    // or custom hook
    const { currentPath } = useNavigation()
    
    if (path === currentPath) {
        return children
    }
    return null
}

export default Route