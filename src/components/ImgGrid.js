import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImgCard from './ImgCard';

export default function ImgGrid(){
    const [imgState, setImgState] = useState();
    const [dateState, setDateState] = useState('date');
    const [titleState, setTitleState] = useState('title');
    const [explainState, setExplainState] = useState('information');

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => {
                console.log(response.data);
                setImgState(response.data.url);
                setDateState(response.data.date);
                setTitleState(response.data.title);
                setExplainState(response.data.explanation);
            })
            .catch(reject => {
                setImgState('failed to load', reject);
                setDateState('failed to load', reject);
                setTitleState('failed to load', reject);
                setExplainState('failed to load', reject)
            })
    }, [])

    return(
        <div className='img-info' >
            <ImgCard imgUrl={ imgState } date={ dateState } title={ titleState } explanation={ explainState } />
        </div>
        
    )
}

// export default function CatGrid({ limit }) {
//     //https://dog.ceo/api/breed/hound/images/random/15
//     const [pets, setPets] = useState([]);
//     const [breed, setBreed] = useState("corgi");
  
//     useEffect(() => {
//       axios
//         .get(`https://dog.ceo/api/breed/${breed}/images/random/15`)
//         .then(response => {
//           const doggos = response.data.message;
//           // console.log("dogs api:", doggos);
//           //Key part save to state
//           setPets(doggos);
//         });
//     }, [breed]);
  
//     return (
//       <div className="cat-grid">
//         <button onClick={() => setBreed("chihuahua")}>Chihuahua</button>
//         <button onClick={() => setBreed("terrier")}>Terrier</button>
  
//         {pets.map(petUrl => {
//           return <CatCard key={petUrl} imgUrl={petUrl} />;
//         })}
//         {/* <div className="cat-card">
//           <img
//             src="https://adorbs-as-a-service.herokuapp.com/api/v1/250w/200h/"
//             alt="kittehs!"
//           />
//         </div> */}
//       </div>
//     );
//   }
  