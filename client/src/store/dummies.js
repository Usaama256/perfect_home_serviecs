import { imgAvator, laundry, logo_b, logo_g } from "./images";

export const dummySPs = [
  {
    id: "2569ce0d517a7f06d3ea1f24",
    desc: "Excel is a home interior designing company based based in Jinja",
    logo: logo_b,
    title: "Excel Interior Designers Ltd",
    owner: "",
    sId: "S00jTr",
    location: "Jinja",
    email: ["example@sample.com", "example@sample.com", "example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "active",
    rating: { value: 3.1, reviews: 10 },
    pricing: [
      {
        id: 1,
        name: "Suite(Complete)",
        price: 10,
        currency: "USD",
        img1: laundry[0].src,
        img2: laundry[1].src,
        img3: laundry[2].src,
      },
      {
        id: 2,
        name: "Trouser",
        price: 2,
        currency: "USD",
        img2: laundry[1].src,
        img3: laundry[2].src,
      },
      { id: 3, name: "Coat", price: 4, currency: "USD" },
      {
        id: 4,
        name: "Shirt",
        price: 3,
        currency: "USD",
        img2: laundry[1].src,
      },
      {
        id: 5,
        name: "Tie",
        price: 1,
        currency: "USD",
        img3: laundry[2].src,
      },
    ],
  },
  {
    id: "ed2b900870ceba72d203ec15",
    desc: "William Suites executive provides laundry services specializing in men and women suites",
    logo: logo_g,
    title: "Willium Suite Co",
    owner: "",
    sId: "S10XkQ",
    location: "Wakiso",
    email: ["example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "pending",
    rating: { value: 4.4, reviews: 6 },
    pricing: [
      { id: 1, name: "Suite(Complete)", price: 10, currency: "USD" },
      { id: 2, name: "Trouser", price: 2, currency: "USD" },
      { id: 3, name: "Coat", price: 4, currency: "USD" },
      { id: 4, name: "Shirt", price: 3, currency: "USD" },
      { id: 5, name: "Tie", price: 1, currency: "USD" },
    ],
  },
  {
    id: "ed02b900870ceba72d203ec15",
    desc: "Dealers In All Kinds Home Electronics",
    logo: logo_b,
    title: "Trust Electronics",
    owner: "",
    sId: "S31QsB",
    location: "Kampala",
    email: ["example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "active",
    rating: { value: 4.9, reviews: 43 },
    pricing: [{ id: 1, name: "Wiring", price: 50, currency: "USD" }],
  },
  {
    id: "a033e38768c82fca90df3db7",
    desc: "Offers fumigation services, erradicates rats, bats, bedbugs and all house pests",
    logo: logo_g,
    title: "GoPest",
    owner: "",
    sId: "S19iyv",
    location: "Kampala",
    email: ["example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "active",
    rating: { value: 4.6, reviews: 4 },
    pricing: [
      {
        id: 1,
        name: "Fumigastion (Start Price)",
        price: 150000,
        currency: "UGX",
        desc: "Depends on the size of work",
      },
    ],
  },
  {
    id: "1efecb2bf6a51def9869ab0f",
    desc: "Offer Amazing Painting Solution",
    logo: logo_b,
    title: "Real-Estate Painters",
    owner: "",
    sId: "S11HFc",
    location: "Mukono",
    email: ["example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "active",
    rating: { value: 3, reviews: 2 },
    pricing: [
      {
        id: 1,
        name: "Painting",
        desc: "Negotiable",
      },
    ],
  },
  {
    id: "1ed68149f65fbc6089b5fd07",
    desc: "The best home security services provider in Uganda",
    logo: logo_g,
    title: "Securecs",
    owner: "",
    sId: "S09snH",
    location: "Kampala",
    email: ["example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "pending",
    rating: { value: 4.0, reviews: 1 },
    pricing: [
      {
        id: 1,
        name: "Security Guards",
        desc: "Meeting Required",
      },
    ],
  },
  {
    id: "1ed68149f65fbc6089b5fd0f7",
    desc: "Provide electrical all installations, repairing and all appliances",
    logo: logo_b,
    title: "Next Electrical Solutions",
    owner: "",
    sId: "S31QsB",
    location: "Mbale",
    email: ["example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "pending",
    rating: { value: 0, reviews: 0 },
    pricing: [
      {
        id: 1,
        name: "Connection Wiring",
        desc: "Depends on size of work, Negotiable",
      },
    ],
  },
  {
    id: "5dab321376eff6177407e887",
    desc: "Ali's Offer the best home renovation services, Ali's Offer the best home renovation services, Ali's Offer the best home renovation services, Ali's Offer the best home renovation services, Ali's Offer the best home renovation services, Ali's Offer the best home renovation services, Ali's Offer the best home renovation services",
    logo: logo_b,
    title: "Ali'sFix Co Ltd",
    owner: "",
    sId: "S31QsA",
    location: "Wakiso",
    email: ["example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "pending",
    rating: { value: 3.9, reviews: 63 },
    pricing: [
      {
        id: 1,
        name: "Connection Wiring",
        desc: "Depends on nature of work, Negotiable, Depends on nature of work, Negotiable, Depends on nature of work, Negotiable, Depends on nature of work, Negotiable, Depends on nature of work, Negotiable",
      },
    ],
  },
];

export const dummyReviews = [
  {
    id: "f69f88012978187a6c12897f",
    name: "usaama245",
    email: "sama@gmail.com",
    phone: 30.5,
    message: "Services were good and I appreciate",
    logo: imgAvator,
    createdAt: new Date(),
  },
  {
    id: "9eaa1c7dd4433f413c308ce2",
    name: "Jack",
    email: "jack2314@gmail.com",
    phone: "+256787800344",
    message: "Customer care is lacking",
    logo: imgAvator,
    createdAt: 1755016400000,
    status: "contacted",
  },
  {
    id: "ffc83c1560ec2f66a1c05596",
    name: "Jack",
    email: "jack2314@gmail.com",
    phone: "+256787800344",
    message: "Booooooooooo",
    logo: imgAvator,
    createdAt: 1554670800000,
    status: "contacted",
  },
  {
    id: "f69f88012978187a6c12897f",
    name: "Rita Among",
    email: "amongrits@gmail.com",
    phone: "+2567875431684",
    message: "Not time conscious",
    logo: imgAvator,
    createdAt: 1555016400000,
    status: "contacted",
  },
  {
    id: "f69f88012978187a6c12897f",
    name: "Ali Ntege",
    email: "hustler256@gmail.com",
    phone: "+256787811377",
    message: "Good works",
    logo: imgAvator,
    createdAt: 1555016400000,
    status: "pending",
  },
  {
    id: "9f974f239d29ede969367103",
    name: "Jack",
    email: "jack2314@gmail.com",
    phone: "+256787800344",
    message: "Great job",
    logo: imgAvator,
    createdAt: 1554670800000,
    status: "contacted",
  },
  {
    id: "f69f88012978187a6c12897f",
    name: "Mary Namutebi",
    email: "namutebimary32@gmail.com",
    phone: "+2567878443123",
    message: "Toooo Expensive",
    logo: imgAvator,
    createdAt: 1555016400000,
    status: "contacted",
  },
];

export const dummyClients = [
  {
    id: "f69f88012978187a6c12897f",
    name: "usaama245",
    email: "sama@gmail.com",
    phone: 30.5,
    type: "email",
    createdAt: new Date(),
    status: "pending",
  },
  {
    id: "9eaa1c7dd4433f413c308ce2",
    name: "Jack",
    email: "jack2314@gmail.com",
    phone: "+256787800344",
    type: "email",
    createdAt: 1755016400000,
    status: "contacted",
  },
  {
    id: "ffc83c1560ec2f66a1c05596",
    name: "Jack",
    email: "jack2314@gmail.com",
    phone: "+256787800344",
    type: "phone",
    createdAt: 1554670800000,
    status: "contacted",
  },
  {
    id: "f69f88012978187a6c12897f",
    name: "Rita Among",
    email: "amongrits@gmail.com",
    phone: "+2567875431684",
    type: "email",
    createdAt: 1555016400000,
    status: "contacted",
  },
  {
    id: "f69f88012978187a6c12897f",
    name: "Ali Ntege",
    email: "hustler256@gmail.com",
    phone: "+256787811377",
    type: "phone",
    createdAt: 1555016400000,
    status: "pending",
  },
  {
    id: "9f974f239d29ede969367103",
    name: "Jack",
    email: "jack2314@gmail.com",
    phone: "+256787800344",
    type: "phone",
    createdAt: 1554670800000,
    status: "contacted",
  },
  {
    id: "f69f88012978187a6c12897f",
    name: "Mary Namutebi",
    email: "namutebimary32@gmail.com",
    phone: "+2567878443123",
    type: "phone",
    createdAt: 1555016400000,
    status: "contacted",
  },
];

export const ownerSample = {
  SPid: "2569ce0d517a7f06d3ea1f24",
  position: "Director",
  firstName: "Jamil",
  lastName: "Kimuli",
  location: "Kakooge, Mpigi",
  email: ["kj111@sample.com"],
  tel: ["071233424234", "032 424 234234"],
  desc: "A Professional IT Officer with proficiency in Database Management",
  avator: imgAvator,
};
