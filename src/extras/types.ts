export interface Geocode {
    name: string;
    local_names: {
      ar: string;
      en: string;
      ko: string;
      ru: string;
      uk: string;
    };
    lat: number;
    lon: number;
    country: string;
state: string;
  }



  export interface LocationData                 
  {
     lat:number;
     lon:number;
     timezone:string;
     timezone_offset:number;
     current:{
        dt:number;
        sunrise:number;
        sunset:number;
        temp:number;
        feels_like:number;
        pressure:number;
        humidity:number;
        dew_point:number;
        uvi:number;
        clouds:number;
        visibility:number;
        wind_speed:number;
        wind_deg:number;
        wind_gust:number;
        weather:[
           {
              id:number;
              main:string;
              description:string;
              icon:string;
           }
        ]
     };
     daily:
      {
         
         summary:string;
         temp:{
            day:number;
            min:number;
            max:number;
            night:number;
            eve:number;
            morn:number;
         };
         
         }[]
         
    
}
                  
                