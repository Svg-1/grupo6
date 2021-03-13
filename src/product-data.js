import React from 'react';
import image from "./assets";


const products = [
  {
    id:1,
    name: "Vestido Casual",
    productType: "Código: DAM0011",
    price: 100,
    rating: 4,
    image: "./assets./vestido1.jpg",
    //"https://i.pinimg.com/originals/4b/4c/c5/4b4cc5913cd9eaf41901901872e4b14a.jpg",
    //"https://photos.google.com/album/AF1QipMkSrlFUuNhbBOBB_1MxdlZdrVLq8PZi2f7Oabd/photo/AF1QipON_z-cABdwYWORG_WRdg8aIGkPOyTGO2-VhjJB",
    //"https://lh3.googleusercontent.com/OOsCI-TcQs_mnorhoY9LwaXi0crrzruDWz2a1hNiIm8OdKL7MKoxYN-UXHi8-X8Qtpb8Zberoa42IoEoJroVLyt6WVGExL3ORRWxrhBiJBZwjIlUUu_eaCwoAw0UI2b1lEfmOpEx9TFyUscZhRNL_OowVQMFwgM5a0klyTHPMYEfXsbl_a0cAqEtWoEINEjRTJcH5NSof-VXnOpYFU9HVSeTY4AVuLUs6AZlmhCpnlSEnJ9zKhGPbeL3CTbS-2-4th_FtCEWHPHxyV8udI92cIt50y041JBYka3OZLeROOeWdlJApXzTo20rtF3zq1ogYMKtqPTi4rwVk-um5bKMoDLctUXxSikjE0_0dxvy_5KKwKcxpB_jOTiwiPSmYeZNmLukkZtkWeYIzNgkX65wZef-2GXQM4gzB8RLT0KHykcVY90YnDD8Pe4JwKOtNBBz-2Y9NdoyDDzExK1gCD2YjL68YCVyIZiXGfPEKK4NTrdEsLKPz1nLghoQzKA_kYOt5umKmWyQ_LUSGX8sTdimefKSxd2KQl_AAr-URjsruBdbnarG8ikb-zQF4wtrK9P8-JaQDSvzWC4xe1pHib4hPgRv5utt_8UOX9bQIEc0aWf0znDNVzlAyjK0Efogzn5ml_RGJlrU3nkTlwGXTcP0CbpWK91VN0p4IE2k8NwicyccRCt-QQwU1OTGA8RrHLNKc2gJjfRN4nDjigbv_Jj0sgtX=s400-no?authuser=0",
      
    description: "Tallas: S, M, L, Colores: Azul, rojo",
  },

  {
    id:2,
    name: "Vestido a rayas",
    productType: "Código: DAM0012",
    price: 85,
    rating: 5,
    image: "./assets/vestido2.jpg",
    //"https://i.pinimg.com/564x/21/85/76/218576e6205a40469c1a66f356e3e323.jpg",
      //"https://lh3.googleusercontent.com/F1f3xaqMD2W2TAvH_3pmNmB7cc4t_kFFrHPK_R_SliK6xITpEEmeHuwcK0X0u5BecEZLSewTjTq3kvMgdW3iEBjm2drGZxWqBB_6s4w1Jn_S2Q-yNmPV03MCwmitnK1T0dRUuPxy3Rcc5DO4UJvgAt1HUsZ9EZpDWR8AVPO7u-Uk5UKoQYoXuuSHyyWkIQJ1jEvWWDeiap1HP-bdYd2-2D9mfrAMIHSi2MQ4VJDcMJ7BoxLp_C9Up7LtIVvWY6NFWwAEMit4iehMSukkWZaflFF8OpPovHwlsU_yU1oZjrrs1ZDLr9KyUw6dv4ZqpmoX1h912yRvk0oVGzACD89gqcS8CouWxudMYAAOfIRQAAH3-cK_YLp5HjEYQVYEHxme3pRmieMJ92yPA7dXzWLKzHah5wXrgXBABz4joEoTcY5AEompB7RkAh4OnE6Fgl7BqKm8XSWklBL1G2YZ-_M6XqygNVT0Muqv2fCdtEoKgfrxHE5jewXAZoQRmNsu3uGGoSxjxl96_g2ZZnl3Rm9USl1-KPKAxFN8RvfePakDodN8xoomdmHvDPM14zeaaVbbBqsbJSIhTzytx8qeahwWBZOegM3RtS-cvA8CpGDOjus00N3fINt7VmXNgUXhnGKDlk26N7-S23vUyXG5lUAx9yok_6idUodwaT77tVpK2NR7bwnnTN1U7jOtT8arrr5j6pys_ns5LOqrvIJEINPo2Ylr=w450-h600-no?authuser=0",
    description:
    "Tallas: S, M, L, Colores: Único ",
  },

  {
    id:3,
    name: "Cardigan Gentleman",
    productType: "Código: VAR0013",
    price: 75,
    rating: 5,
    image: "./assets/varon2.jpg",
    //"https://i.pinimg.com/originals/cd/68/0d/cd680dd149b226e32c27a51c215b1b9b.png",
      //"https://lh3.googleusercontent.com/4WUdDGTmb99YfnidYHQax19khL21u6Zh8opXayBh1YmQQA4q5WqzMLub2GuOvCj4UXaDrb2ndZG4sEYWGFypCr0clw_1949sdfYHSWcUVDOFtKxv3Gp_q6GijnjaH9aVNRNnH-voZRiOuRlCIqCjY_b5j7PteXSj6xqhmNVzVcoLpBcRZa-39bL7ymBAOIhaeBZJ3Cc83g6BeI2Gy1F0QtBMOykvpE-VloaX9c7Ntv-m9ROrvfX2AHMPpxK7zEyMgQqBaL3W3Lgrk2q7EMD7Od_SkOWoEa-d5iyx42ruSgP_khqvr11foImNwmkTuwlYtYVjiKjsaQG0O1nlyQud5UKmmG3Afr6Z1w_TIMWBjwJGEI3O9oy_GxEPWMBa2Muxztca6zBQJyeggd-Dd3EJVTtMLSq2QMvNSTZXzOTBJhf6DiBraC8ytdaXlM0R4HJWXZASNwrBFcy1mZ1hexgU6eNZMb-tG4e_d2STMg-00QitVMpMZGVNMtThxku8uO-vteJHJToVkBugLHWGn6V1iT-MGBl_e9k3dtJeHQj2s9y5quvDlpz7AcuFywMywZZcj9sq9bta2E5IvIWeCczn6YFxPTOJd4bSUFN0wCDBXS4sUQC-7HLoEm0BNK6R9qLuB1Y2MLmtz1Xafi7xJphgE0JfjQMWuzpn-TFxAEdW-ZjyoPXDPJOblZujDhufiHLCSW5KUd1_xU6RTi358D5guX06=s637-no?authuser=0",

    description:
    "Tallas: S, M, L, Colores: Acero, Gris ",
  },

  {
    id:4,
    name: "Cartera Luis Vuitton",
    productType: "Código: AC0014",
    price: 90,
    rating: 3,
    image: "./assets/carteras4.jpg",
    //"https://http2.mlstatic.com/D_NQ_NP_912018-MPE30201170079_052019-W.jpg",
      //" https://lh3.googleusercontent.com/6muTZu3aD_G61r80ASwhYyXFmBpb2w5EZVL2X066u5VpylBbuLdb7LZj72iV5AALix3BTCnw0J7v_TOagBnUrmqJligR2Kdtb_xKpf7aVYNowZcjiav7Z9J7yZK0Lb-aWoCLcr9MamvBU5qsuS3hkvB4WhoBgtUx7sgUB3uzNpn93GE4cvqTzwKZfcF0IqtUhHuyUMU4Lk14A0yIVadFGvuIEMKTrmS1tRm_X93cj-aWwa8A0QL9WW_dYVWqCoCjcHcbFvA7Ob_FZV-gsCHpkvitF--8xb358ANQDcvpd3melcfWFwZ1NXUECfg0fOWV8p2lXwgDQ-RwRpmJy8WjmVby-W_3g0pfHJgfqXUJu-g2qJS3_S8gWWcdjh5gdoA0IpbMSzbo0vE-tqG6MZHTMxG38ke4ir31UhKNHhOpSRYeyJqi_r56bLc5Yn1zoUHt20jdR5K_ldz5w7Pbmm_RXVAKbDu93hqRA2_r_GHFutF5iNuWPvZ4eHUsZKu3TmcCmp8BRTVHFCG7DrDPeMZhA_5CUICId3xkNtSCiWM1j2XvnydbuWDIL-j164gdQKn9huX5VsWCCBE08IOjjbm4CTqltzFlhewQLQa-lqANUt4JYy4ow4iRQ4nKJ_NLI-lBB_XXbN-6fOLYgm6ZpPqrUor7lyXOjveP7-geIzrbmwkWEU-assBhf0M_FQyy5SvEbyjQX2i5Ava8u1VBS5Qa4Hfk=s600-no?authuser=0",

    description:
    " Colores: Único, material Cuero, con bolsillos interiores ",
  },

  {
    id:5,
    name: "Zapatos Ambar",
    productType: "Código: ZADA0015",
    price: 120,
    rating: 5,
    image: "./assets/zapatodama1.jpg",
    //"https://i.pinimg.com/originals/c5/79/42/c579429ffc1fb8cafe7b581c9dbe714c.jpg",
     // " https://lh3.googleusercontent.com/XGMW2jwhkkNxZt6Y9tRlTN4wvRvrAXOjEHAaE03cYmjZ2yGFWtuyH5NFwtD-fdgvDUXegSCXC0l8u2dTc2LYykASKm-lFP9Z6Q2mPhctrvgmrpm_dZTwURgnOhL13gJaAPPGsQGfTQKgEZNN0W5H9Bs2Wf-HDi2lA-nFUZcJZlMuhb7g0_bbAqpYzs67HAs-8pkkOyd98jCZlRT04vzLEtwCYA4CIgAKUdqqZCLr-ueB2Fr_riTqtzyHH40G14d7roedu_HoTKUKgPDbCDPa5EP-Bf8ZjxbJO3l0LDXVATn5FITnwGnTLS7XvfPzRau-A4sWyO2YsAXmd4iUEBanoTtjDKbtDAvUi7feNvN5n9cRSr9AMeZePhlhZI5XSSQp1W4zEUF4k3sdOqn_38UHhYIVP_45imwzq0ftFaEz_dNgcQZr0vADMUzp9d2pvSyShpdzCShGRbJ-sNRx8vS6sRjyq4IzO7FAzt0XJAC7qITORFIy654wI9ASiq2VGhh5dOYoADeGoRLhCee28Fm9UzLhW-SLo-nl_jJZ6B1Rlq3GmIm3lD8BgTcztm0Ksle7Am3mxZ5Mmd3skoQ8abPOiJidxwCxoepja-bHeb4T90bx8hQFP-Ki1jffZN2YUruGdRiRGvZetkIO66LqrLA-x8tHXXXtg2_I_K0Ww-eCGwQvyQkm72zZIATKj2VBYrThIHOeTJBU7AY0UY9CYOZrPPBm=s450-no?authuser=0",

    description:
    "Tallas: 36, 37, 38, 39  Colores: Melón, Palo rosa, Crema ",

  },

  {
    id: 6,
    name: "Zapatos Coronado",
    productType: "Código: ZAVA0016",
    price: 140,
    rating: 3,
    image: "./assets/zapatovaron1.jpg",
    //"https://www.hites.com/dw/image/v2/BDPN_PRD/on/demandware.static/-/Sites-mastercatalog_HITES/default/dwb53fb1ba/images/original/calzado-hombre/789765001.jpg?sw=400&sh=400",
      //" https://lh3.googleusercontent.com/xkpTZNxy6J2ypAUC6_duQ4rzVeJUV3cgHEtNOAxQ1iKoIpCZg3nPlCdJRmEK9JfOfJ66YbdTm44hw2a94h4AATaLIaP6X8_K-jG2_Xb2z1jdO5Xq5yqDetj-0K3fYPGVwy0q0IgqFj8yYSe63QExi3E8VD6x5CwYr-xZqS5BOfJqUFxZyz6RQn5vdevBDam00cJ41R3F9dazjm0_kTSz_4f3Bv_x3IWINjTPyw2URf9cn7XLyYCs6B3_QjDpNoCvLFY9Qv_H_sTAygi7C5J6MnaXWjF9TH2UuNnCc_h12CqBCtYeR8lHkq7-Z7UaIt-vVIBH9dEvfyNtuIHBsmzldASgJ-BGqkQNPq1GnH3R4MUKorLbPLS0faxejX4Vd3wf8WTH3cht1FL9f-q1qRofatUNX4xEo6_lWxUixc3hrClnov7DG8ApSdOl9WngshMjFhPZQpjrf9AiI8weghu8tvlrw1jQg9OJyg3myDQKOqdc1ZBT2YqDxP4OdCSGscFksXGtRVmbtdxNHc6ZW1756-oklEDY7uFXJgAEQB5vuNUmsgZDuq8MPpBKIWAT9VesTTlwYCb1Hb5SeaL-ieVUTRnA4DyRBkpHyVUSJNaGmXW2-orqXbCTIPnEOm62dx8uNbrsY1MK5u-O_BKgLg62OT1HOhuiShWt3iw8mbAZ1xyFbhutqiVWgd5tQbrmqIWMolc-NWxHVJ1qzSi_boHRuBG0=s458-no?authuser=0",

    description:
    "Tallas: 40, 41, 42, 43, 44  Colores: Negro, marrón, Material: Cuero ",
  },

  {
    id: 7,
    name: "Camisa Guerrerito",
    productType: "Código: CÑO0017",
    price: 40,
    rating: 4,
    image: "./assets/niños3.jpg",
    //"https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw6ee449fa/images/imagenes-productos/643/926464-0465-005.jpg?sw=320&sh=409&sm=fit",
      //" https://lh3.googleusercontent.com/1h14l8vrA89SZ8nUhqCa3oGZeXmLg4B8eAPPPQCnvEleumU05R0_BRSMAb7pN3_b81ha6XoskFmw_QG5IBNosSI7C9HtZrDZwHib8q98CBlqhyrSOQxxWKwZCk4vtsGY9F1qPpvLMSrnh6o5byP3KIUqFoy-vP62cK6tzi2AiUnZ7hliKwHs20zvAdJuF4gZ5YIHSB89U8d5uGFs_FQ92kGPnSWPlN7z1xvTamUpCRmwCcVxO8svNXGg-_ohmO3y7BwVEd1X24Lrsw6EoqfZHin0t1mosc6dvk5LEMipFWHTtXnsr1ICfhRKINTBESaLqDoBT30vnqYVvjVHtmLwOHjIVU7z4efPKjfIcLYyiufw2GiNraxaxDmzvbC4VPy42dP3RbpuSfmzZprCPppYVppyBZTAu1mTdAETXs3l-lEync49SGE2BGHd2igCJq_AmaMPYhGdmN4KLVoIf5LdIj4oM7gMpyvsYubQyYMtxp4145MnIJ8_pCzqkbOBTlsefaTzgJ1uYLpbamaUaGevnaHShxMctCfiJZrgnuJffjcG-AGy08VIAzqrYDpDGw7I-AsW5x2rxvRWC_6nVw9ocipWIMg-lkrHx98DQNAZjZqv4AaW6BibGRuDx1ofvBjCtotamuB_F50p8k8pqeAYqCcWRa2y0VnE6q4Baqeq0_XaF-yIOMvq6P0pWajK_WcEb2IeW0mUaf_kavTgcledgK64=w633-h637-no?authuser=0",

    description:
      "Tallas: 8, 10, 12, Colores: Único ",
  },

  {
    id: 8,
    name: "Vestido Candy",
    productType:  "Código: CÑA-0018",
    price: 50,
    rating: 5,
    image: "./assets/niños5.jpg",
    //"https://i.pinimg.com/originals/fe/3c/05/fe3c0541400282bbe7b8a0ee1a77cf46.jpg",
      //" https://lh3.googleusercontent.com/rVQwEd-ZLguGNxg11g4gVlr8meZnEfeOu9nkNjSCsGQwbu4FX6P1y2smjNWXWVb45Wkm-AeZEJ4xoGi6_7KiKwBB9LYCTf0EYuHAdaHkCovzVkaF932h4Rt7GK-gttny-UrbBvZ8WsENz3rLiKiwg3Nw7uqdNWjmvb1d2_j8t2v_OUpuGqcegmqkqLrwJtHF-V_twveFrpS735HtFhETyVGQ4fsjxwkAtQDK-9h3kP8xHvek4t2i0zcJuJcD8dqhyfjWgbgRkjN1H8LSkjKApYD29i9FCjjV5kCE4DnaCLBrUT16Awz6UIYeoW43kGWKfFIICmTm_9-UqQtW8UDEAGGqiF6M6lF9jFI3A3n1w2ubU9lABmm1EgA6lAGr8fEMVTpTO74nFiOKoFx5_jg9g8SSxY6u9pUG5HitiK5ROgv1s5QNpFUQT1udFhj-dsvby8X6bzVjC_2jhm054ElO5rafihvufTOZOGWaf5mP0MjyNg4x4_NcHPydZNQ2Ba4hqgeN2vhwuZokEK089DWw5dhtUlLSAp_Er1ftp9LF8RxVpYZinGU6WhI740VZE_qmEntmAgg_NkRF28965oi6GmaKsjXrw8U2jH4aFRCIRTpjgbVx9U6SkulG5VCgt7VPGrZ1Ar3lqaeExnpdQ0po93v9mI1c8ZYVMB_eR4yIE8t2qibFHl5GLGpJe2n32jnJuuUmNqir78QAUmtvKo9LxzWC=w587-h527-no?authuser=0",

    description:
      " Tallas: 8, 10, 12, Colores: celeste, rosado",
  },

];

export default products;