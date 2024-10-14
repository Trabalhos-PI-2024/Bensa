import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      id: 1,
      name: 'Tênis Adidas Adi2000',
      image1: adi2000Img1,
      image2: adi2000Img2
    },
    {
      id: 2,
      name: 'Tênis NewBalance 9060',
      image1: nbImg1,
      image2: nbImg2
    },
    {
      id: 3,
      name: 'Tênis Nike Air Jordan',
      image1: jordanImg1,
      image2: jordanImg2
    },
    {
      id: 4,
      name: 'Tênis Adidas Bad Bunny',
      image1: sambaImg1,
      image2: sambaImg2
    },
    {
      id: 5,
      name: 'Tênis Nike Air Force',
      image1: forceImg1,
      image2: forceImg2
    },
    {
      id: 6,
      name: 'Bag Nike',
      price: 'R$199,99',
      image: bagImage
    },
    {
      id: 7,
      name: 'Cap Nike',
      price: 'R$99,99',
      image: capImage
    },
    {
      id: 8,
      name: 'Bolsa Nike',
      price: 'R$299,99',
      image: bolsaImage
    },
    {
      id: 9,
      name: 'Touca Nike',
      price: 'R$79,99',
      image: toucaImage
    },
    {
      id: 10,
      name: 'Touca Nike',
      price: 'R$79,99',
      image: toucaImage
    },
    {
      id: 11,
      name: 'Touca Nike',
      price: 'R$79,99',
      image: toucaImage
    },
    {
      id: 12,
      name: 'Calça Nike',
      price: 'R$199,99',
      image: calcaImg
    },
    {
      id: 13,
      name: 'Camiseta Nike',
      price: 'R$99,99',
      image: fuckImg
    },
    {
      id: 14,
      name: 'Jaqueta Nike',
      price: 'R$299,99',
      image: jacketImg
    },
    {
      id: 15,
      name: 'Moletom Nike',
      price: 'R$79,99',
      image: moletomImg
    },
    {
      id: 16,
      name: 'Moletom Nike',
      price: 'R$79,99',
      image: moletomImg
    },
    { 
      id: 17, 
      name: 'Chapéu Vans 1', 
      price: 'R$59,99', 
      image: chapeu1vans 
    },
    { 
      id: 18, 
      name: 'Camisa Nike 3', 
      price: 'R$89,99', 
      image: camisa3nike 
    },
    { 
      id: 19, 
      name: 'Calça Nike 4', 
      price: 'R$119,99', 
      image: calca4nike 
    },
    { 
      id: 20, 
      name: 'Camisa Nike 2', 
      price: 'R$79,99', 
      image: camisa2nike 
    },
    { 
      id: 21, 
      name: 'Chapéu Vans 2', 
      price: 'R$69,99', 
      image: chapeu2vans 
    },
    { 
      id: 22, 
      name: 'Camisa Adidas 1', 
      price: 'R$89,99', 
      image: camisa1adidas 
    },
    { 
      id: 23, 
      name: 'Camisa Adidas 2', 
      price: 'R$89,99', 
      image: camisa2adidas 
    },
    { 
      id: 24, 
      name: 'Camisa Adidas 3', 
      price: 'R$99,99', 
      image: camisa3adidas 
    },
    { 
      id: 25, 
      name: 'Camisa Stussy 4', 
      price: 'R$109,99', 
      image: camisa4stussy 
    },
    { 
      id: 26, 
      name: 'Camisa Stussy 5', 
      price: 'R$119,99', 
      image: camisa5stussy 
    },
    { 
      id: 27, 
      name: 'Shorts Stussy 2', 
      price: 'R$79,99', 
      image: shorts2stussy 
    },
    { 
      id: 28, 
      name: 'Moletom Stussy 3', 
      price: 'R$139,99', 
      image: moletom3stussy 
    },
    { 
      id: 29, 
      name: 'Tênis Nike 1', 
      price: 'R$199,99', 
      image: tenis1nike 
    },
    { 
      id: 30, 
      name: 'Tênis Adidas 1', 
      price: 'R$189,99', 
      image: tenis1adidas 
    },
    { 
      id: 31, 
      name: 'Tênis Adidas 6', 
      price: 'R$249,99', 
      image: tenis6adidas 
    },
    { 
      id: 32, 
      name: 'Tênis Adidas 5', 
      price: 'R$239,99', 
      image: tenis5adidas 
    },
    { 
      id: 33, 
      name: 'Tênis Nike 2', 
      price: 'R$209,99', 
      image: tenis2nike 
    },
    { 
      id: 34, 
      name: 'Tênis Adidas 4', 
      price: 'R$229,99', 
      image: tenis4adidas 
    },
    { 
      id: 35, 
      name: 'Tênis Adidas 2', 
      price: 'R$179,99', 
      image: tenis2adidas 
    },
    { 
      id: 36, 
      name: 'Tênis Nike 3', 
      price: 'R$219,99', 
      image: tenis3nike 
    },
    { 
      id: 37, 
      name: 'Tênis Nike 4', 
      price: 'R$229,99', 
      image: tenis4nike 
    },
    { 
      id: 38, 
      name: 'Tênis Nike 5', 
      price: 'R$239,99', 
      image: tenis5nike 
    },
    { 
      id: 39, 
      name: 'Tênis Adidas 3', 
      price: 'R$209,99', 
      image: tenis3adidas 
    },
    { 
      id: 40, 
      name: 'Tênis Nike 6', 
      price: 'R$249,99', 
      image: tenis6nike 
    },
    { 
      id: 41, 
      name: 'Mochila Nike 2', 
      price: 'R$139,99', 
      image: mochila2nike 
    },
    { 
      id: 42, 
      name: 'Chapéu Vans 1', 
      price: 'R$59,99', 
      image: chapeu1vans 
    },
    { 
      id: 43, 
      name: 'Chapéu Stussy 1', 
      price: 'R$69,99', 
      image: chapeu1stussy 
    },
    { 
      id: 44, 
      name: 'Chapéu Stussy 2', 
      price: 'R$79,99', 
      image: chapeu2stussy 
    },
    { 
      id: 45, 
      name: 'Bag Adidas 1', 
      price: 'R$149,99', 
      image: bag1adidas 
    },
    { 
      id: 46, 
      name: 'Mochila Nike 3', 
      price: 'R$159,99', 
      image: mochila3nike 
    },
    { 
      id: 47, 
      name: 'Mochila Nike 4', 
      price: 'R$169,99', 
      image: mochila4nike 
    },
    { 
      id: 48, 
      name: 'Mochila Adidas 2', 
      price: 'R$179,99', 
      image: mochila2adidas 
    },
    { 
      id: 49, 
      name: 'Tênis Vans 1', 
      price: 'R$199,99', 
      image: tenis1vans 
    },
    { 
      id: 50, 
      name: 'Mochila Nike 2', 
      price: 'R$139,99', 
      image: mochila2nike 
    },
    { 
      id: 51, 
      name: 'Camisa Nike 3', 
      price: 'R$89,99', 
      image: camisa3nike 
    },
    { 
      id: 52, 
      name: 'Calça Nike 4', 
      price: 'R$119,99', 
      image: calca4nike 
    },
    { 
      id: 53, 
      name: 'Tênis Nike 2', 
      price: 'R$209,99', 
      image: tenis2nike 
    },
    { 
      id: 54, 
      name: 'Camisa Nike 2', 
      price: 'R$79,99', 
      image: camisa2nike 
    },
    { 
      id: 55, 
      name: 'Mochila Nike 3', 
      price: 'R$159,99', 
      image: mochila3nike 
    },
    { 
      id: 56, 
      name: 'Tênis Nike 3', 
      price: 'R$219,99', 
      image: tenis3nike 
    },
    { 
      id: 57, 
      name: 'Tênis Nike 4', 
      price: 'R$229,99', 
      image: tenis4nike 
    },
    { 
      id: 58, 
      name: 'Tênis Nike 5', 
      price: 'R$239,99', 
      image: tenis5nike 
    },
    { 
      id: 59, 
      name: 'Mochila Nike 4', 
      price: 'R$169,99', 
      image: mochila4nike 
    },
    { 
      id: 60, 
      name: 'Tênis Nike 6', 
      price: 'R$249,99', 
      image: tenis6nike 
    },
    { 
      id: 61, 
      name: 'Tênis Vans 2', 
      price: 'R$209,99', 
      image: tenis2vans 
    },
    { 
      id: 62, 
      name: 'Tênis Vans 3', 
      price: 'R$219,99', 
      image: tenis3vans 
    },
    { 
      id: 63, 
      name: 'Tênis Vans 4', 
      price: 'R$229,99', 
      image: tenis4vans 
    },
    { 
      id: 64, 
      name: 'Tênis Vans 5', 
      price: 'R$239,99', 
      image: tenis5vans 
    },
    { 
      id: 65, 
      name: 'Tênis Vans 6', 
      price: 'R$249,99', 
      image: tenis6vans 
    },
    { 
      id: 66, 
      name: 'Camiseta Puma 1', 
      price: 'R$69,99', 
      image: camiseta1puma 
    },
    { 
      id: 67, 
      name: 'Camiseta Puma 2', 
      price: 'R$79,99', 
      image: camiseta2puma 
    },
    { 
      id: 68, 
      name: 'Camiseta Puma 3', 
      price: 'R$89,99', 
      image: camiseta3puma 
    },
    { 
      id: 69, 
      name: 'Moletom Puma 1', 
      price: 'R$159,99', 
      image: moletom1puma 
    },
    { 
      id: 70, 
      name: 'Moletom Puma 2', 
      price: 'R$169,99', 
      image: moletom2puma 
    },
    { 
      id: 71, 
      name: 'Calça Puma 1', 
      price: 'R$119,99', 
      image: calca1puma 
    },
    { 
      id: 72, 
      name: 'Calça Puma 2', 
      price: 'R$129,99', 
      image: calca2puma 
    },
    { 
      id: 73, 
      name: 'Chapéu Puma 1', 
      price: 'R$59,99', 
      image: chapeu1puma 
    },
    { 
      id: 74, 
      name: 'Chapéu Puma 2', 
      price: 'R$69,99', 
      image: chapeu2puma 
    },
    { 
      id: 75, 
      name: 'Bag Puma 1', 
      price: 'R$149,99', 
      image: bag1puma 
    },
    { 
      id: 76, 
      name: 'Bag Puma 2', 
      price: 'R$159,99', 
      image: bag2puma 
    },
    { 
      id: 77, 
      name: 'Tênis Puma 1', 
      price: 'R$199,99', 
      image: tenis1puma 
    },
    { 
      id: 78, 
      name: 'Tênis Puma 2', 
      price: 'R$209,99', 
      image: tenis2puma 
    },
    { 
      id: 79, 
      name: 'Tênis Puma 3', 
      price: 'R$219,99', 
      image: tenis3puma 
    },
    { 
      id: 80, 
      name: 'Tênis Puma 4', 
      price: 'R$229,99', 
      image: tenis4puma 
    },
    { 
      id: 81, 
      name: 'Tênis Puma 5', 
      price: 'R$239,99', 
      image: tenis5puma 
    },
    { 
      id: 82, 
      name: 'Tênis Puma 6', 
      price: 'R$249,99', 
      image: tenis6puma 
    },
    { 
      id: 83, 
      name: 'Camiseta Stussy 1', 
      price: 'R$99,99', 
      image: camiseta1stussy 
    },
    { 
      id: 84, 
      name: 'Camiseta Stussy 2', 
      price: 'R$109,99', 
      image: camiseta2stussy 
    },
    { 
      id: 85, 
      name: 'Camiseta Stussy 3', 
      price: 'R$119,99', 
      image: camiseta3stussy 
    },
    { 
      id: 86, 
      name: 'Moletom Stussy 1', 
      price: 'R$139,99', 
      image: moletom1stussy 
    },
    { 
      id: 87, 
      name: 'Moletom Stussy 2', 
      price: 'R$149,99', 
      image: moletom2stussy 
    },
    { 
      id: 88, 
      name: 'Moletom Stussy 3', 
      price: 'R$159,99', 
      image: moletom3stussy 
    },
    { 
      id: 89, 
      name: 'Shorts Adidas 1', 
      price: 'R$79,99', 
      image: shorts1adidas 
    },
    { 
      id: 90, 
      name: 'Shorts Adidas 2', 
      price: 'R$89,99', 
      image: shorts2adidas 
    },
    { 
      id: 91, 
      name: 'Shorts Nike 1', 
      price: 'R$99,99', 
      image: shorts1nike 
    },
    { 
      id: 92, 
      name: 'Shorts Nike 2', 
      price: 'R$109,99', 
      image: shorts2nike 
    },
    { 
      id: 93, 
      name: 'Shorts Stussy 1', 
      price: 'R$69,99', 
      image: shorts1stussy 
    },
    { 
      id: 94, 
      name: 'Shorts Stussy 2', 
      price: 'R$79,99', 
      image: shorts2stussy 
    },
    { 
      id: 95, 
      name: 'Bag Stussy 1', 
      price: 'R$129,99', 
      image: bag1stussy 
    },
    { 
      id: 96, 
      name: 'Bag Stussy 2', 
      price: 'R$139,99', 
      image: bag2stussy 
    },
  ])

  function getProductById(id) {
    for (let product of products.value) {
      if (product.id == id) {
        return product
      }
    }
    return null
  }

  return { products, getProductById }
})
