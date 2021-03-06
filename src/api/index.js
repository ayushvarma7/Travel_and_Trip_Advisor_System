import axios from "axios";

// const options = {
// //   method: 'GET',
//   url: URL,
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',  
//     tr_longitude: '109.149359',
//     // restaurant_tagcategory_standalone: '10591',
//     // restaurant_tagcategory: '10591',
//     // limit: '30',
//     // currency: 'USD',
//     // open_now: 'false',
//     // lunit: 'km',
//     // lang: 'en_US'
//   },
//   headers: {
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
//     'X-RapidAPI-Key': '1c3807c165mshd59f1207a009c89p1be6fejsnfc373aaf8f3d'
      // 'X-RapidAPI-Key': '7af65f79cfmsh0a077f403e69fedp1389b8jsne3a827f7ef4b'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const getPlacesData = async(type, sw, ne)=> {
    try{
        const URL=`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
        //destructuring our data to get restaurant names
        const {data:{data}}= await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,

                // bl_latitude: '11.847676',
                //     tr_latitude: '12.838442',
                //     bl_longitude: '109.095887',
                //     tr_longitude: '109.149359',
                
                // restaurant_tagcategory_standalone: '10591',
                // restaurant_tagcategory: '10591',
                // limit: '30',
                // currency: 'USD',
                // open_now: 'false',
                // lunit: 'km',
                // lang: 'en_US'
              },
              headers: {
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                // 'X-RapidAPI-Key': '1c3807c165mshd59f1207a009c89p1be6fejsnfc373aaf8f3d'
                // 'X-RapidAPI-Key': '7af65f79cfmsh0a077f403e69fedp1389b8jsne3a827f7ef4b'
              }
        }); 
        console.log(URL);
        return data;
    }catch(error){
        // console.log(error);
    }
}




// const options = {
//   method: 'GET',
//   url: 'https://healthruwords.p.rapidapi.com/v1/quotes/',
//   params: {t: 'Wisdom', maxR: '1', size: 'medium', id: '731'},
//   headers: {
//     'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com',
//     'X-RapidAPI-Key': '1c3807c165mshd59f1207a009c89p1be6fejsnfc373aaf8f3d'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });