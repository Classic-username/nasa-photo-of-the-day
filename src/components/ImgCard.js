import React from 'react';

export default function ImgCard({ imgUrl }){
    return (
        <div className='img-of-day'>
            <img src={ imgUrl } style={{maxWidth: '800px'}} />S
        </div>
    )
    }