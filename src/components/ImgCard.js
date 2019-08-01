import React from 'react';



export default function ImgCard({ title, imgUrl, date, explanation }){
    return (
        <div className='img-of-day' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <div><h2>{ title } </h2></div>
            <div><img src={ imgUrl } /></div>
            <div>Today's date: { date }</div>
            <div style={{ maxWidth: '800px', alignSelf:'center'}}>{ explanation }</div>
        </div>
    )
    }