import Leaflet from 'leaflet'
import React, { useEffect } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import StoreList from './containers/StoreList'
import StoreInformation from './containers/StoreInformation'
import ConditionForm from './containers/ConditionForm'

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'


export default function App (props) {
  const {display_mode} = props
  useEffect(()=>{

if(props.response[0]  === null)props.getCurrentLocation();
getWindowSize(props);
window.addEventListener("resize", () => {
  getWindowSize();
});

  })
  const getWindowSize = () => {
    let w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      t = w.innerWidth || e.clientWidth || g.clientWidth;

    if (t < 1000) {
      if (display_mode !== "mini") {
        props.change_display_mode("mini");
      }
    } else if (display_mode !== "normal") {
      props.change_display_mode("normal");
    }
  };

  return (
    <div>

              <StoreList />
              <StoreInformation />
            <ConditionForm />
    </div>
  );
}
