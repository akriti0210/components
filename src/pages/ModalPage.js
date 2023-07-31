import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

function ModalPage() {
    const [showModal, setShowModal] = useState(false)
    
    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>

    return (
        <div className='relative'>

            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh urna, faucibus at ipsum nec, suscipit varius felis. Pellentesque egestas magna a lorem auctor tincidunt elementum at ante. Curabitur vestibulum felis quis tellus tincidunt, lobortis iaculis est congue. Sed eu metus massa. Nunc ligula nisl, bibendum id mauris tempor, vulputate tempus elit. Sed sagittis rutrum odio, et ultrices lectus semper ac. Fusce ligula erat, porttitor eget facilisis in, eleifend auctor orci. Nunc sed purus finibus mi rutrum aliquam ac in ligula. Etiam ullamcorper fermentum elit, id blandit mauris laoreet ut. Cras luctus, nisi at fringilla dapibus, odio est interdum arcu, quis volutpat ante ipsum ut lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet semper justo. In non eros ex. Mauris non rutrum nunc. Aenean eu eros at arcu condimentum pellentesque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh urna, faucibus at ipsum nec, suscipit varius felis. Pellentesque egestas magna a lorem auctor tincidunt elementum at ante. Curabitur vestibulum felis quis tellus tincidunt, lobortis iaculis est congue. Sed eu metus massa. Nunc ligula nisl, bibendum id mauris tempor, vulputate tempus elit. Sed sagittis rutrum odio, et ultrices lectus semper ac. Fusce ligula erat, porttitor eget facilisis in, eleifend auctor orci. Nunc sed purus finibus mi rutrum aliquam ac in ligula. Etiam ullamcorper fermentum elit, id blandit mauris laoreet ut. Cras luctus, nisi at fringilla dapibus, odio est interdum arcu, quis volutpat ante ipsum ut lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet semper justo. In non eros ex. Mauris non rutrum nunc. Aenean eu eros at arcu condimentum pellentesque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh urna, faucibus at ipsum nec, suscipit varius felis. Pellentesque egestas magna a lorem auctor tincidunt elementum at ante. Curabitur vestibulum felis quis tellus tincidunt, lobortis iaculis est congue. Sed eu metus massa. Nunc ligula nisl, bibendum id mauris tempor, vulputate tempus elit. Sed sagittis rutrum odio, et ultrices lectus semper ac. Fusce ligula erat, porttitor eget facilisis in, eleifend auctor orci. Nunc sed purus finibus mi rutrum aliquam ac in ligula. Etiam ullamcorper fermentum elit, id blandit mauris laoreet ut. Cras luctus, nisi at fringilla dapibus, odio est interdum arcu, quis volutpat ante ipsum ut lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet semper justo. In non eros ex. Mauris non rutrum nunc. Aenean eu eros at arcu condimentum pellentesque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh urna, faucibus at ipsum nec, suscipit varius felis. Pellentesque egestas magna a lorem auctor tincidunt elementum at ante. Curabitur vestibulum felis quis tellus tincidunt, lobortis iaculis est congue. Sed eu metus massa. Nunc ligula nisl, bibendum id mauris tempor, vulputate tempus elit. Sed sagittis rutrum odio, et ultrices lectus semper ac. Fusce ligula erat, porttitor eget facilisis in, eleifend auctor orci. Nunc sed purus finibus mi rutrum aliquam ac in ligula. Etiam ullamcorper fermentum elit, id blandit mauris laoreet ut. Cras luctus, nisi at fringilla dapibus, odio est interdum arcu, quis volutpat ante ipsum ut lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet semper justo. In non eros ex. Mauris non rutrum nunc. Aenean eu eros at arcu condimentum pellentesque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh urna, faucibus at ipsum nec, suscipit varius felis. Pellentesque egestas magna a lorem auctor tincidunt elementum at ante. Curabitur vestibulum felis quis tellus tincidunt, lobortis iaculis est congue. Sed eu metus massa. Nunc ligula nisl, bibendum id mauris tempor, vulputate tempus elit. Sed sagittis rutrum odio, et ultrices lectus semper ac. Fusce ligula erat, porttitor eget facilisis in, eleifend auctor orci. Nunc sed purus finibus mi rutrum aliquam ac in ligula. Etiam ullamcorper fermentum elit, id blandit mauris laoreet ut. Cras luctus, nisi at fringilla dapibus, odio est interdum arcu, quis volutpat ante ipsum ut lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet semper justo. In non eros ex. Mauris non rutrum nunc. Aenean eu eros at arcu condimentum pellentesque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh urna, faucibus at ipsum nec, suscipit varius felis. Pellentesque egestas magna a lorem auctor tincidunt elementum at ante. Curabitur vestibulum felis quis tellus tincidunt, lobortis iaculis est congue. Sed eu metus massa. Nunc ligula nisl, bibendum id mauris tempor, vulputate tempus elit. Sed sagittis rutrum odio, et ultrices lectus semper ac. Fusce ligula erat, porttitor eget facilisis in, eleifend auctor orci. Nunc sed purus finibus mi rutrum aliquam ac in ligula. Etiam ullamcorper fermentum elit, id blandit mauris laoreet ut. Cras luctus, nisi at fringilla dapibus, odio est interdum arcu, quis volutpat ante ipsum ut lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet semper justo. In non eros ex. Mauris non rutrum nunc. Aenean eu eros at arcu condimentum pellentesque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh urna, faucibus at ipsum nec, suscipit varius felis. Pellentesque egestas magna a lorem auctor tincidunt elementum at ante. Curabitur vestibulum felis quis tellus tincidunt, lobortis iaculis est congue. Sed eu metus massa. Nunc ligula nisl, bibendum id mauris tempor, vulputate tempus elit. Sed sagittis rutrum odio, et ultrices lectus semper ac. Fusce ligula erat, porttitor eget facilisis in, eleifend auctor orci. Nunc sed purus finibus mi rutrum aliquam ac in ligula. Etiam ullamcorper fermentum elit, id blandit mauris laoreet ut. Cras luctus, nisi at fringilla dapibus, odio est interdum arcu, quis volutpat ante ipsum ut lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet semper justo. In non eros ex. Mauris non rutrum nunc. Aenean eu eros at arcu condimentum pellentesque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh urna, faucibus at ipsum nec, suscipit varius felis. Pellentesque egestas magna a lorem auctor tincidunt elementum at ante. Curabitur vestibulum felis quis tellus tincidunt, lobortis iaculis est congue. Sed eu metus massa. Nunc ligula nisl, bibendum id mauris tempor, vulputate tempus elit. Sed sagittis rutrum odio, et ultrices lectus semper ac. Fusce ligula erat, porttitor eget facilisis in, eleifend auctor orci. Nunc sed purus finibus mi rutrum aliquam ac in ligula. Etiam ullamcorper fermentum elit, id blandit mauris laoreet ut. Cras luctus, nisi at fringilla dapibus, odio est interdum arcu, quis volutpat ante ipsum ut lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet semper justo. In non eros ex. Mauris non rutrum nunc. Aenean eu eros at arcu condimentum pellentesque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh urna, faucibus at ipsum nec, suscipit varius felis. Pellentesque egestas magna a lorem auctor tincidunt elementum at ante. Curabitur vestibulum felis quis tellus tincidunt, lobortis iaculis est congue. Sed eu metus massa. Nunc ligula nisl, bibendum id mauris tempor, vulputate tempus elit. Sed sagittis rutrum odio, et ultrices lectus semper ac. Fusce ligula erat, porttitor eget facilisis in, eleifend auctor orci. Nunc sed purus finibus mi rutrum aliquam ac in ligula. Etiam ullamcorper fermentum elit, id blandit mauris laoreet ut. Cras luctus, nisi at fringilla dapibus, odio est interdum arcu, quis volutpat ante ipsum ut lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet semper justo. In non eros ex. Mauris non rutrum nunc. Aenean eu eros at arcu condimentum pellentesque.</p>
        
            {/* putting the modal here, modal will be hidden because scrolling is disable on body
                so replace the absolute with fixed position */}
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
        </div>
    )
}

export default ModalPage