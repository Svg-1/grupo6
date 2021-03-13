import React, {useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import ReactDOM from "react-dom";
import { Carousel } from "react-bootstrap";
import img from "../assets";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1> Bienvenidos !! </h1>
      

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= "muestradama1.jpg"
            //"https://lh3.googleusercontent.com/inogi0mXB7PtDXXRzn7cbgxYxMPmEwzQGRl7MfHXcWTROxcpkz46VaEWoRvu8i9_xBMGfVDeLZnDRG0D_mrLby9tDWfji3u8oocLnGGxoje1ToU7rgAqS81J8Up7nbGNnct3jevZ2Gb8zL5qUd2Dimc1eGVTTqMojenRdwWdTduZNv2IEZnvHpzy8e793vKSzwWyHr_mPj8AkgoHGVkptLFcVnAE10gk_0FYX1vpeMSxLxzu_kKMirRBd_wDqgsoeiBmbRax5OZ8uz-Ph-CRoElL3iqP-fIFfhPx23zXkYIkQlUDISHsLry6dIzAcanOkaxOV_k4zHHZj2W8SJmdx2mVfSLdFvn7MQMjWiJ7f_fm1hGLcta1nPcKcGElp0Q2qfDsas0damKrBy01ilN_vdNPVyXURHeXC-eGqLvhcZK54ZXLC09ZUgC_kxJHQqmIwcTUniwYyrohVqFTe7NTPYjghDZ8wIik0u-2gXicBKHid7oTWx2KeHNOi6jzSkgN74DtQt6Hl5Ru4ne0XJa6oabromkaXAs4FXHBjUgUR0xwENhCTEX6coSrTrAqI1MLezA9bzQhB8_vvtvgH9Y06ijP4FtDk_oa6WLfFoj3v9NcOk_E0GnorL3csVay-7h5uPpDgPDyBvxftg6gyrrpD55P1xQObkrIIWzE6vhUTIJ2W8wAPZnMPzqNbuyqAyIUfTqNqpjIqx-mb0wNeCQ8Rzsr=w878-h623-no?authuser=0"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Tendencias 2021 Damas.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src= "../assets/muestravaron1.jpg"
            //"https://lh3.googleusercontent.com/1_ZHg8iNYcqbUXrwgtSiJmHiGUmDbAgG7VQDe4J6urfMTeDffYuQaKCTvvqcm5U8tIeoe2dJrjpwGERJdOM6Bk54TQ5q7zw4z30Uw-0hmP27XiTuiHyMez3pYkWwiyC2m4RA1Tmy43rY0s1r8mAqioKx1qPpPeHNBSOnkIxrTBZJYUbm2AMJF27T4_zQWLM5omT6WCpI4GC5PvV1hlN_BvAk-0kV0njpHsgeVY8Z1iniHniPdZd_z_-CTrPV8w-geRLr-Re_Y393hhIih6d0a2rtUl4PZg1eJ4zdp35oGeCsqeglxzzR0jEIi44n6KgGP7Vl90W_M8HdQsFSu8UoIVTotidyi70QLYvLsB1PyEWUnhIOTPlQHf2RcqylIm0nA4RaDpUQUnrSazKMVeJFpuBtePnZFSsjFW5EgFRb3DlyU9VOIOf0j7-QJNJzwMffHVK_IWcwLAfpgUydS_ERmXSFLXz5IV0WO6UtkJCBNH4QnCtLoHhQ91hQtuc2ORAuSzLIovNQQWjAolyry8-cQX1K0bayZ8q4qQg5TNS22VXOnkwZa3AN9uojXezsadNw2rJV61aDXGPFo8EeiP4QSt5sxrwMOqKg_4XTi8Ekw2OSUWbxsylu_a8Gfw5WObOsmlQjWGGslpiuUV82cUwHOR_6p2F-HghZtxIMUUwKqTEon0JykEKhv4WLj8SKpe3BxS9Nw8TXOC4rT9Uk9hNXg5pl=w866-h450-no?authuser=0"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Tendencias 2021 Varones </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src= "muestracarteras1.jpg"
            //"https://lh3.googleusercontent.com/cOoeZ4j_O6f2kXD4c0JHLqZwRAtny-CbQWru2u6PoPIFt1n0Bppw8MZOC9TQs-xD4lLX_Xi4UuRipv1D5Z3Zg2Re_YVH0qx8NJ0ZmsgbWadhkzOyL8Fo6C1HqNvJsDLbf3O5RUZ65SmZiBfio40RVUh_PXpgf-M58Fiwx4mmZEbiDV1Y15cVHDOYFGTEEG2jBoHtvUORTPi9T5c4f65NYp2sjXR5lQAFyY4I_PyPmvOHQF2_gl0vsnhjvsY_4AdVt54EesRe3DicFZXLDMSfZYYAy02Dv1EL8Xf-B8GY8EigUAlIbB94d9d9HQobxe5VqnlK6tyJ651tQ5q1XE9lxDLSz1joM8C-DKcP01VUQqPcb8nDAMfHlfsZsiA9M0GJuv4uYXo4mPR-Cz8VDXQiLRPM6ww6cuRUt44PabMwm2XiaOHvxF4INbzvti4sUTMK64gTCp9rNGIe3eBurLu-qG5tz0DCuvlW2nj0SGEARBHIdMaOCqhVchSqdMSi3ZxqbCU6iapJEYuPx4Digcr5-pMnPokz2MV7MmD1o-OcL-u1seTturDwZwxe8ukmfq_TLtVJwnWQQUqF8-uLluLe5fdY30sWhzr8oNZiYLWaf5pRhW2Y-EOUeaFzk49_xrSfkSmzc_JdXNjyFNX24VVEMStEZ34qBOgNdBm0fot55DPLyk3ujfCflldi1w3RyxM4s0z7BJKav_oIv_0i3V0juvh2=w754-h464-no?authuser=0"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p> Hermosas carteras para la temporada 2021 </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src= "muestraniños1.jpg"
            //"https://lh3.googleusercontent.com/1ozkOZF4lio5ll3kUj2_HKMiI3sBQFUDvOQmsCdpzW7Vr0nmMbeg1kg58lIisTqJf-eQzj85d32YZLSR_vOu-wv1p3IifoqLSAfCly7B5vA21ldHL0YE-1a5-CMgHUArDZ1SOaAVKKJo_WqjtOfjxyxhPz_o2qm_uiA_18fqGtM34E5eqFBwPmPXpq6z-5t_Ib_wcYL-9qdbASv4qEDaq-eSHW9LlloDtyC-2ICOPVVyekpQAAV-pA7Qt0_ef8nq_GK_5FVWkBfY_OlbEgOxbJk10vH662Cz9bwO2RoiQoK3xjFKI8u9U5ogSp1Zh9fV9VGUFeb7Bcu5oBRgof0_6r7QBJvFICY7QQAZ1WYFVu9bnsOiaSkylsx6fOyom9-HQivQo3fsCwUlERi6vV-gjx0jcq-TTp7C2wLAHHlwqmAqGHBvr9NZlZpkYLEOv2tK14F111yrAVB6kfpNQOyDI7dvXnISrwcPTELhdrUW6-DUA8K3A6kXw3K-A42LbhdYB3IlANCDJVUuy_b0mBu_s6kWrp0bUgTi9o86vbRaZHEge1krheh3CuZyV9623f8hPN24JVFpe-SKKixqGoFoTIlnW2ghF1Y3c1s1gHsdN_OccdE3btBCeFxV61sfA_tDUBYqZ64cx45KJp3k8RIddf3fEI4zBEu2aKBgO4V-dRV3H30c5TO7-VPjqqzMI4jgGuP2Za7wWgR0hPExs_DlV7bQ=w464-h657-no?authuser=0"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>fourth slide label</h3>
            <p> Pequeños a la Moda.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}



const Caratula=() =>{
    const classes = useStyles();  
  const history = useHistory();


    return (
        <div>
            
        </div>
    )
}

export default Caratula;


