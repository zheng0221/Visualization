import React from 'react';
import ReactPlayer from 'react-player';

class D3VideoPlayer extends React.Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'E:\GitProj\sna_pj\visual\ant-admin\src\components\video\ikun.mp4'
            width='100%'
            height='100%'
            controls = {true}
            />
        </div>
        )
    }
}

export default D3VideoPlayer;