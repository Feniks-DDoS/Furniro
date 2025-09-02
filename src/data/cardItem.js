export const cardItem = [
    {
     id: 1,
     title: 'Syltherine',
     body: 'Stylish cafe chair',
     totalPrice: 3_500_000,
     discountProcent: 30,
     discountPrice: null ,
     source: {
        srcSet: './images/product/avif/1.avif',
        type: 'image/avif',
     },
     img: {
        src: './images/product/jpg/1.jpg',
        alt: 'Stylish cafe chair'
     }
    } ,  
    {
     id: 2,
     title: 'Lolito',
     body: 'Luxury big sofa',
     totalPrice: 14_000_000,
     discountProcent: 0,
     discountPrice: null ,
     source: {
        srcSet: './images/product/avif/2.avif',
        type: 'image/avif',
     },
     img: {
        src: './images/product/jpg/2.jpg',
        alt: 'Stylish cafe chair'
     }
    } ,  
    {
     id: 3,
     title: 'Respira',
     body: 'Outdoor bar table and stool',
     totalPrice: 500_000,
     discountProcent: 30,
     discountPrice: null ,
     source: {
        srcSet: './images/product/avif/3.avif',
        type: 'image/avif',
     },
     img: {
        src: './images/product/jpg/3.jpg',
        alt: 'Stylish cafe chair'
     }
    }  , 
    {
     id: 4,
     title: 'Pingky',
     body: 'Cute bed set',
     totalPrice: 14_000_000,
     discountProcent: 0,
     discountPrice: null ,
     newProduct: 'New',
     source: {
        srcSet: './images/product/avif/4.avif',
        type: 'image/avif',
     },
     img: {
        src: './images/product/jpg/4.jpg',
        alt: 'Stylish cafe chair'
     }
    }  , 
    {
     id: 5,
     title: 'Potty',
     body: 'Minimalist flower pot',
     totalPrice: 500_000,
     discountProcent: 0,
     discountPrice: null ,
     source: {
        srcSet: './images/product/avif/5.avif',
        type: 'image/avif',
     },
     img: {
        src: './images/product/jpg/5.jpg',
        alt: 'Stylish cafe chair'
     }
    },
    {
     id: 6,
     title: 'Muggo',
     body: 'Small mug',
     totalPrice: 150_000,
     discountProcent: 0,
     discountPrice: null ,
     newProduct: 'New',
     source: {
        srcSet: './images/product/avif/6.avif',
        type: 'image/avif',
     },
     img: {
        src: './images/product/jpg/6.jpg',
        alt: 'Stylish cafe chair'
     }
    },
    {
     id: 7,
     title: 'Grifo',
     body: 'Night lamp',
     totalPrice: 1_500_000,
     discountProcent: 50,
     discountPrice: null ,
     source: {
        srcSet: './images/product/avif/7.avif',
        type: 'image/avif',
     },
     img: {
        src: './images/product/jpg/7.jpg',
        alt: 'Stylish cafe chair'
     }
    },
    {
     id: 8,
     title: 'Levisio',
     body: 'Stulish cafe chair',
     totalPrice: 2_500_000,
     discountProcent: 0,
     discountPrice: null ,
     newProduct: 'New',
     source: {
        srcSet: './images/product/avif/8.avif',
        type: 'image/avif',
     },
     img: {
        src: './images/product/jpg/8.jpg',
        alt: 'Stylish cafe chair'
     }
    },
]


cardItem.forEach(item => {
   if(item.discountProcent) {
      const discount = item.discountProcent / 100
      item.discountPrice = Math.round(item.totalPrice * (1 - discount))
   }
})