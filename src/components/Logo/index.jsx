import React from 'react';


const Logo = ({src, width = 70, height = 70}) => (
    <div>
        <img src={src} alt="logo" width={width} height={height} />
    </div>
);

export default Logo