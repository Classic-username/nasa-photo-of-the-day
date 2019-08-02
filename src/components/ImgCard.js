import React from 'react';
import styles from 'styled-components';
import { ColorOfDay } from './ColorOfDay';






export default function ImgCard({ title, imgUrl, date, explanation }){

    // const [sliceDate, setSliceDate]

    const ImgH2 = styles.h2`
    color: #A31F6B;
    `;
   



    const ColoredDiv = styles.div`
        color: #A31F6B;
        margin: 5px;
    `;
        

    /*const dateSlice = date.slice(8)


    const ColoredDiv = styles.div`
        color: ${ColorOfDay.forEach(cv => {
        if(cv.day == dateSlice){
            console.log(cv.color)
            return cv.color
        }
        
        })
        };
        margin: 5px;
    `; */
    

     

    return (
        
        <div className='img-of-day' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <ColoredDiv ><ImgH2>{ title } </ImgH2></ColoredDiv>
            <ColoredDiv><img src={ imgUrl } /></ColoredDiv>
            <ColoredDiv>Today's date: { date }</ColoredDiv>
            <ColoredDiv style={{ maxWidth: '800px', alignSelf:'center'}}>{ explanation }</ColoredDiv>
        </div>
        
    )
    }