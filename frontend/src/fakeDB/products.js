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
    colors: [9, 3, 5],
    created_at: 1658108671295,
    images: {
      main: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5149f8e1-49a0-45f9-b9fc-ddd8f7a38ef7/air-max-97-womens-shoes-Fr6rM4.png',
      show: [
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6101456b-d7e2-4db3-bf8f-8eb575b1334d/air-max-97-womens-shoes-Fr6rM4.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/78c399bc-6b51-4980-a617-1ccd029d30d5/air-max-97-womens-shoes-Fr6rM4.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb110688-c308-41e4-9384-dc6ae6c64278/air-max-97-womens-shoes-Fr6rM4.png'
      ]
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5],
    gender: [0],
    sku: 1,
    'sub-products': [
      {
        sku: 2,
        images: {
          main: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/101331ac-72fe-4832-9302-39ba74bb39b0/air-max-97-womens-shoes-Fr6rM4.png',
          show: [
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/101331ac-72fe-4832-9302-39ba74bb39b0/air-max-97-womens-shoes-Fr6rM4.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/349dc069-d459-4766-b6c1-c39ecafb6e13/air-max-97-womens-shoes-Fr6rM4.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/429ab3e0-8a2d-48d0-ba25-f0026511b568/air-max-97-womens-shoes-Fr6rM4.png'
          ]
        },
        sizes: [5, 5.5, 6, 6.5, 7]
      },
      {
        sku: 3,
        images: {
          main: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/05dfb08e-c9b7-4cb3-9f49-9e740f173e06/air-max-97-se-womens-shoes-Fr6rM4.png',
          show: [
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/05dfb08e-c9b7-4cb3-9f49-9e740f173e06/air-max-97-se-womens-shoes-Fr6rM4.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/10a0f07c-835c-478f-a121-8b9c93cd7008/air-max-97-se-womens-shoes-Fr6rM4.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2082d6d7-145b-4cd2-894e-f54f2f3a50de/air-max-97-se-womens-shoes-Fr6rM4.png'
          ]
        },
        sizes: [5, 5.5, 6.5, 7, 7.5]
      }
    ]
  }
]

export { products }
