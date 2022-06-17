import productImage from './assets/images/product-image.png';

export const productsData = [
  {
    id: 1,
    isSelected: false,
    isDisabled: false,
    slogon: 'Сказочное заморское яство',
    title: 'Нямушка',
    taste: 'с фуа-гра',
    weight: 0.5,
    description: 'Печень утки разварная с артишоками.',
    portionNumber: 10,
    miceNumber: 1,
    bonuses: [],
    image: {
      url: productImage,
      alt: 'Нямушка с фуа-гра',
    }
  },
  {
    id: 2,
    isSelected: false,
    isDisabled: false,
    slogon: 'Сказочное заморское яство',
    title: 'Нямушка',
    taste: 'с рыбой',
    weight: 2,
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    portionNumber: 40,
    miceNumber: 2,
    bonuses: [],
    image: {
      url: productImage,
      alt: 'Нямушка с фуа-гра',
    }
  },
  {
    id: 3,
    isSelected: false,
    isDisabled: true,
    slogon: 'Сказочное заморское яство',
    title: 'Нямушка',
    taste: 'с курой',
    weight: 5,
    description: 'Филе из цыплят с трюфелями в бульоне.',
    portionNumber: 100,
    miceNumber: 5,
    bonuses: [
      'заказчик доволен',
    ],
    image: {
      url: productImage,
      alt: 'Нямушка с фуа-гра',
    }
  }
]
