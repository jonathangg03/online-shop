const COLOR_TABLE = {
  white: 0,
  black: 1,
  blue: 2,
  green: 3,
  yellow: 4,
  pink: 5,
  purple: 6,
  gray: 7,
  lightblue: 8,
  red: 9
}

const GENDER_TABLE = {
  female: 0,
  male: 1
}

const CATEGORY_TABLE = [
  {
    name: 'Calzado',
    id: 0
  },
  {
    name: 'Relojes',
    id: 1
  },
  {
    name: 'Ropa',
    id: 2
  }
]

const products = [
  {
    name: 'Nike Air Max 97',
    description: {
      small: 'Women´s shoes',
      big: 'These streamlined kicks, first introduced in 1997, were inspired by water ripple lines. The sleek design looks fast and the heel-to-toe Max Air unit puts a little extra bounce in your stride.'
    },
    price: '12000',
    category: 1,
    colors: [9, 8, 5],
    created_at: 1658108671295,
    gender: [0],
    variations: [
      {
        color: 9,
        images: {
          presentation:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0ed77dcc-5293-46ac-9032-b785bd182af5/air-max-97-womens-shoes-Fr6rM4.png',
          collection: [
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0ed77dcc-5293-46ac-9032-b785bd182af5/air-max-97-womens-shoes-Fr6rM4.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2d51118b-e06a-4e2b-8282-a8ea6ea7f9ad/air-max-97-womens-shoes-Fr6rM4.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3f4a5845-f617-47cf-837f-0c8ba55e4acc/air-max-97-womens-shoes-Fr6rM4.png'
          ]
        },
        sku: 1,
        sizes: [5, 5.5, 6, 6.5, 7, 7.5]
      },
      {
        color: 8,
        images: {
          presentation:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/249438dd-c851-4570-bb2d-566d8ccbd1c4/air-max-97-womens-shoes-Fr6rM4.png',
          collection: [
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/249438dd-c851-4570-bb2d-566d8ccbd1c4/air-max-97-womens-shoes-Fr6rM4.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8dbfbd50-4e4e-4e45-9e5f-000a270cbde0/air-max-97-womens-shoes-Fr6rM4.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c716ef8c-2aa2-4c4b-bd6d-5183517701d6/air-max-97-womens-shoes-Fr6rM4.png'
          ]
        },
        sku: 2,
        sizes: [5, 5.5, 6, 6.5, 7]
      },
      {
        color: 5,
        images: {
          presentation:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9543e003-b0a5-46af-848f-da3b3046cb61/air-max-97-womens-shoes-Fr6rM4.png',
          collection: [
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9543e003-b0a5-46af-848f-da3b3046cb61/air-max-97-womens-shoes-Fr6rM4.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/429ab3e0-8a2d-48d0-ba25-f0026511b568/air-max-97-womens-shoes-Fr6rM4.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/429ab3e0-8a2d-48d0-ba25-f0026511b568/air-max-97-womens-shoes-Fr6rM4.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9dffed5f-f507-46ba-a176-629d554501a2/air-max-97-womens-shoes-Fr6rM4.png'
          ]
        },
        sku: 3,
        sizes: [5, 5.5, 6.5, 7, 7.5]
      }
    ]
  }
]

export { products }
