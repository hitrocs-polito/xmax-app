// eslint-disable-next-line no-unused-vars
const phoneDatabase = [
  {
    id: 1,
    title: 'iPhone 13 Pro',
    description: 'The latest iPhone with advanced camera features and powerful performance.',
    price: 9850000, // Price in dollars
    color: 'Graphite',
    RAM: '6GB',
    memory: '128GB',
    imgUrl: 'https://olcha.uz/image/700x700/products/2021-09-24/apple-iphone-13-pro-256gb-25274-0.jpeg',
    model: 'Apple'
  },
  {
    id: 2,
    title: 'iPhone SE 2023',
    description: 'The latest iPhone with advanced camera features and powerful performance.',
    price: 6300000, // Price in dollars
    color: 'Graphite',
    RAM: '6GB',
    memory: '128GB',
    imgUrl: 'https://olcha.uz/image/700x700/products/2020-12-03/apple-iphone-se-2020-128gb-black-19794-0.jpeg',
    model: 'Apple'
  },
  {
    id: 3,
    title: 'iPhone 11 Pro Max',
    description: 'The latest iPhone with advanced camera features and powerful performance.',
    price: 7500000, // Price in dollars
    color: 'Graphite',
    RAM: '6GB',
    memory: '128GB',
    imgUrl: 'https://olcha.uz/image/700x700/products/2019-10-14/apple-iphone-11-128gb-yellow-10471-0.jpeg',
    model: 'Apple'
  },
  {
    id: 4,
    title: 'iPhone 15',
    description: 'The latest iPhone with advanced camera features and powerful performance.',
    price: 14850000, // Price in dollars
    color: 'Graphite',
    RAM: '6GB',
    memory: '128GB',
    imgUrl: 'https://olcha.uz/image/700x700/products/supplier/stores/1/2023-09-13/sQ7QChiBRL7NPuML3UzXR0qCs5fBIfZDxu5kitd5SkmmtjHwC5XhAj8WUq7T.jpg',
    model: 'Apple'
  },
  {
    id: 5,
    title: 'Xiaomi Redmi Note 10',
    description: 'A budget-friendly smartphone with a high-quality camera and long battery life.',
    price: 2900000,
    color: 'Aqua Green',
    RAM: '4GB',
    memory: '64GB',
    imgUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBRMQKWuMIZ0L-iLBojGoSgPcQzQE8FvltiqUwI-nX9s1CEEy3fj_hnC7tk9P03A9PP4XwGatB4SGB93sl5Lb36yBNMYgqMJlRjqIu43jGD-POn8v4jvlxSykwbbCtoZpSz8uDAgXmh3Y&usqp=CAc',
    model: 'Xiaomi'
  },
  {
    id: 6,
    title: 'Samsung Galaxy S21 Ultra',
    description: 'An ultra-premium phone with a stunning display and top-notch camera system.',
    price: 13400000,
    color: 'Phantom Black',
    RAM: '12GB',
    memory: '256GB',
    imgUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBRMQKWuMIZ0L-iLBojGoSgPcQzQE8FvltiqUwI-nX9s1CEEy3fj_hnC7tk9P03A9PP4XwGatB4SGB93sl5Lb36yBNMYgqMJlRjqIu43jGD-POn8v4jvlxSykwbbCtoZpSz8uDAgXmh3Y&usqp=CAc',
    model: 'Samsung'
  },
  {
    id: 7,
    title: 'OnePlus 9 Pro',
    description: 'Flagship killer phone with exceptional performance and fast charging.',
    price: 9900000,
    color: 'Morning Mist',
    RAM: '8GB',
    memory: '128GB',
    imgUrl: 'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-pro-1.jpg',
    model: 'Oneplus'
  },
  {
    id: 8,
    title: 'Google Pixel 6 Pro',
    description: 'Featuring an advanced camera system and Google’s latest AI innovations.',
    price: 10250000,
    color: 'Stormy Black',
    RAM: '12GB',
    memory: '256GB',
    imgUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBRMQKWuMIZ0L-iLBojGoSgPcQzQE8FvltiqUwI-nX9s1CEEy3fj_hnC7tk9P03A9PP4XwGatB4SGB93sl5Lb36yBNMYgqMJlRjqIu43jGD-POn8v4jvlxSykwbbCtoZpSz8uDAgXmh3Y&usqp=CAc',
    model: 'Google'
  },
  {
    id: 9,
    title: 'Huawei P40 Pro',
    description: 'A top-tier phone with a Leica quad-camera system and sleek design.',
    price: 8750000,
    color: 'Silver Frost',
    RAM: '8GB',
    memory: '256GB',
    imgUrl: 'https://fdn2.gsmarena.com/vv/bigpic/huawei-p30-pro.jpg',
    model: 'Huawei'
  },
  {
    id: 10,
    title: 'Sony Xperia 1 III',
    description: 'Bringing cinema-quality viewing to a smartphone with a 4K OLED display.',
    price: 14650000,
    color: 'Frosted Black',
    RAM: '12GB',
    memory: '256GB',
    imgUrl: 'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-iii.jpg',
    model: 'Sony'
  },
  {
    id: 11,
    title: 'Motorola Edge 20 Pro',
    description: 'A sleek phone with a high-refresh-rate display and capable camera setup.',
    price: 8560000,
    color: 'Midnight Blue',
    RAM: '8GB',
    memory: '128GB',
    imgUrl: 'https://motorolaroe.vtexassets.com/arquivos/ids/157285-800-auto?width=800&height=auto&aspect=true',
    model: 'Motorola'
  },
  {
    id: 12,
    title: 'Asus ROG Phone 5',
    description: 'A gaming-centric phone with top-tier performance and dedicated gaming features.',
    price: 12000000,
    color: 'Phantom Black',
    RAM: '16GB',
    memory: '256GB',
    imgUrl: 'https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro-9.jpg',
    model: 'Asus'
  },
  {
    id: 13,
    title: 'Xiaomi 13T',
    description: 'An affordable flagship phone with a high-refresh-rate display and powerful processor.',
    price: 6540000,
    color: 'Racing Yellow',
    RAM: '8GB',
    memory: '128GB',
    imgUrl: 'data:image/webp;base64,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',
    model: 'Xiaomi'
  }
];

export default phoneDatabase