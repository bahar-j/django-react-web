import React from "react";
import { KakaoMap, Marker } from "react-kakao-maps";
 
export default function MapView() {
  return (
    <React.Fragment>
      <div style={{fontSize: '2.5vw',
        color: '#106E79',
        fontWeight: 'bold',
        marginTop: '4.5vw',
        marginLeft: '18vw',
        marginBottom: '3.5vw'}}>오시는 길</div>
      <div style={{paddingLeft: '15vw'}}>
      <KakaoMap
        apiUrl="//dapi.kakao.com/v2/maps/sdk.js?appkey=176377212f1acd1172cb1037213f6917"
        width="70vw"
        height="40vw"
        level={2}
        lat={37.5972248}
        lng={127.0578695}
      ><Marker lat={37.5972248} lng={127.0578695}></Marker>
      </KakaoMap>
      </div>
      <div style={{marginTop: '2.5vw',
        marginLeft: '16vw',
        fontSize: '1vw'}}></div>
    </React.Fragment>
  );
}