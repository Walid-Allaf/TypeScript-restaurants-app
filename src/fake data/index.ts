import {
  burger,
  meal,
  coffee,
  croissant,
  fruitJuice,
  pizza,
  grilled,
  grilledFood,
  express,
  paypal,
  visa,
  creditCard,
} from "../assets";

export const RestaurantsInfo = [
  {
    id: "res1",
    name: "Cordoba Restaurant",
    img: burger,
    paymentMethod: "paypal",
    paymentImg: paypal,
    rate: 5.0,
    time: "30 - 35",
    delivery: 10,
    lowest: "75",
    location: "Latakia",
    gps: {
      longitude: 35.8952667,
      Latitude: 35.5407103,
    }
  },
  {
    id: "res2",
    name: "اوسيس",
    img: meal,
    paymentMethod: "visa",
    paymentImg: visa,
    rate: 5.0,
    time: "40 - 45",
    delivery: 0,
    lowest: "150",
    location: "Aleppo",
    gps: {
      longitude: 37.166668,
      Latitude: 36.116667,
    }
  },
  {
    id: "res3",
    name: "بن الشام",
    img: coffee,
    paymentMethod: "creditCard",
    paymentImg: creditCard,
    rate: 4.9,
    time: "35 - 40",
    delivery: 0,
    lowest: "100",
    location: "Damascus",
    gps: {
      longitude: 36.298336,
      Latitude: 33.540414,
    }
  },
  {
    id: "res4",
    name: "Croissant Home",
    img: croissant,
    paymentMethod: "paypal",
    paymentImg: paypal,
    rate: 4.5,
    time: "20 - 30",
    delivery: 0,
    lowest: "50",
    location: "Aleppo",
    gps: {
      longitude: 37.266668,
      Latitude: 36.216667,
    }
  },
  {
    id: "res5",
    name: "Cocktails",
    img: fruitJuice,
    paymentMethod: "paypal",
    paymentImg: paypal,
    rate: 4.0,
    time: "15 - 20",
    delivery: 10,
    lowest: "50",
    location: "Damascus",
    gps: {
      longitude: 36.278336,
      Latitude: 33.510414,
    }
  },
  {
    id: "res6",
    name: "بيتزا",
    img: pizza,
    paymentMethod: "visa",
    paymentImg: visa,
    rate: 4.6,
    time: "25 - 30",
    delivery: 0,
    lowest: "175",
    location: "Latakia",
    gps: {
      longitude: 35.7952667,
      Latitude: 35.5407103,
    }
  },
  {
    id: "res7",
    name: "Mint Cafe and Resto",
    img: express,
    paymentMethod: "visa",
    paymentImg: visa,
    rate: 4.5,
    time: "5 - 10",
    delivery: 0,
    lowest: "20",
    location: "Aleppo",
    gps: {
      longitude: 37.125036705638436,
      Latitude: 36.218965637881354,
    }
  },
  {
    id: "res8",
    name: "مشاوي",
    img: grilled,
    paymentMethod: "creditCard",
    paymentImg: creditCard,
    rate: 4.8,
    time: "30 - 35",
    delivery: 25,
    lowest: "175",
    location: "Aleppo",
    gps: {
      longitude: 37.100032705638436,
      Latitude: 36.258965637881354,
    }
  },
  {
    id: "res9",
    name: "Maestro",
    img: grilledFood,
    paymentMethod: "paypal",
    paymentImg: paypal,
    rate: 5.0,
    time: "20 - 25",
    delivery: 10,
    lowest: "100",
    location: "Homs",
    gps: {
      longitude: 36.7136959,
      Latitude: 34.7324273,
    }
  },
];
