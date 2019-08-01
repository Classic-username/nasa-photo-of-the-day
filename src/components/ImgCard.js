import React from 'react';



export default function ImgCard({ title, imgUrl, date, explanation }){
    return (
        <div className='img-of-day'>
            <div><h2>{ title } </h2></div>
            <img src={ imgUrl } />
            <div>Today's date: { date }</div>
            <div style={{ maxWidth: '800px', justifyContent: 'center'}}>{ explanation }</div>
        </div>
    )
    }