import { useEffect } from 'react'
import ReactDOM from 'react-dom'

function Modal({ onClose, children, actionBar }) {
    
    useEffect(() => {
        document.body.classList.add('overflow-hidden')

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [])
    
    // absolute only works if the closest parent element is positioned static
    // it's working fine because there is no static positioned parent
    // to avoid future bug use Portal to create a modal
    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className='fixed inset-0 bg-gray-300 opacity-80'></div>
            <div className='fixed inset-40 p-10 bg-white'>
                <div className='flex flex-col justify-between h-full'>
                    {children}
                </div>
                <div className='flex justify-end'>
                    {actionBar}
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    )
//     return (
//     <div>
//         <div className='absolute inset-0 bg-gray-300 opacity-80'></div>
//         <div className='absolute inset-40 p-10 bg-white'>
//             I am a modal
//         </div>
//     </div>
//   )
}

export default Modal