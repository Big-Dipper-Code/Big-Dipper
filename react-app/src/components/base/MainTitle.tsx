import React from 'react'
import Logo from '@/assets/BigDipperLogo.jpg'
import { Avatar } from '@material-ui/core'
function MainTitle() {
    return (
        <div>
            <h1>
                <Avatar alt="BigDipperLogo" src={Logo} />
                Big-Dipper
            </h1>
        </div>
    )
}
export default MainTitle
