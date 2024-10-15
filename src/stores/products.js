import { ref } from 'vue'
import { defineStore } from 'pinia'
// Imagens de lançamentos
import adi2000Img1 from '../assets/img/Lancamentos/adi2000.webp';
import adi2000Img2 from '../assets/img/Lancamentos/adidas2000.webp';
import nbImg1 from '../assets/img/Lancamentos/nb.webp';
import nbImg2 from '../assets/img/Lancamentos/nbb.webp';
import jordanImg1 from '../assets/img/Lancamentos/jordan.webp';
import jordanImg2 from '../assets/img/Lancamentos/jordan1.webp';
import sambaImg1 from '../assets/img/Lancamentos/samba.webp';
import sambaImg2 from '../assets/img/Lancamentos/samba1.webp';
import forceImg1 from '../assets/img/Lancamentos/force.webp';
import forceImg2 from '../assets/img/Lancamentos/force1.webp';

// Imagens de acessórios
import bagImage from '../assets/img/Acessorios/bag.jpg';
import capImage from '../assets/img/Acessorios/cap.webp';
import bolsaImage from '../assets/img/Acessorios/bolsa.webp';
import toucaImage from '../assets/img/Acessorios/touca.webp';

// Imagens de roupas
import calcaImg from '../assets/img/roupas/calca.webp';
import fuckImg from '../assets/img/roupas/fuck.webp';
import jacketImg from '../assets/img/roupas/jacket.webp';
import moletomImg from '../assets/img/roupas/moletom.webp';

// Imagens de produtos Nike
import tenis1nike from '../assets/produtos.nike/tenis1nike.webp';
import mochila2nike from '../assets/produtos.nike/mochila2nike.webp';
import camisa3nike from '../assets/produtos.nike/camisa3nike.webp';
import calca4nike from '../assets/produtos.nike/calca4nike.webp';
import camisa2nike from '../assets/produtos.nike/camisa2nike.png';
import mochila3nike from '../assets/produtos.nike/mochila3nike.webp';
import mochila4nike from '../assets/produtos.nike/mochila4nike.avif';
import tenis2nike from '../assets/produtos.nike/tenis2nike.webp';
import tenis3nike from '../assets/produtos.nike/tenis3nike.webp';
import tenis4nike from '../assets/produtos.nike/tenis4nike.webp';
import tenis5nike from '../assets/produtos.nike/tenis5nike.webp';
import tenis6nike from '../assets/produtos.nike/tenis6nike.webp';

// Imagens de produtos Adidas
import tenis1adidas from '../assets/produtos.adidas/tenis1adidas.webp';
import mochila2adidas from '../assets/produtos.adidas/mochila2adidas.jpg';
import mochila1adidas from '../assets/produtos.adidas/mochila1adidas.webp';   
import camisa3adidas from '../assets/produtos.adidas/camisa3adidas.webp';
import camisa1adidas from '../assets/produtos.adidas/camisa1adidas.webp';
import camisa2adidas from '../assets/produtos.adidas/camisa2adidas.webp';
import tenis2adidas from '../assets/produtos.adidas/tenis2adidas.webp';
import tenis3adidas from '../assets/produtos.adidas/tenis3adidas.webp';
import tenis4adidas from '../assets/produtos.adidas/tenis4adidas.jpg';
import tenis5adidas from '../assets/produtos.adidas/tenis5adidas.webp';
import tenis6adidas from '../assets/produtos.adidas/tenis6adidas.webp';
import bag1adidas from '../assets/produtos.adidas/bag1adidas.webp';

// Imagens de produtos Vans
import tenis1vans from '../assets/produtos.vans/tenis1vans.webp';
import chapeu1vans from '../assets/produtos.vans/chapeu1vans.webp';
import mochila1vans from '../assets/produtos.vans/mochila1vans.webp';
import bag1vans from '../assets/produtos.vans/bag1vans.webp';
import chapeu2vans from '../assets/produtos.vans/chapeu2vans.webp';
import oculos1vans from '../assets/produtos.vans/oculos1vans.webp';
import tenis2vans from '../assets/produtos.vans/tenis2vans.webp';
import tenis3vans from '../assets/produtos.vans/tenis3vans.webp';
import tenis4vans from '../assets/produtos.vans/tenis4vans.webp';
import tenis5vans from '../assets/produtos.vans/tenis5vans.webp';
import oculos2vans from '../assets/produtos.vans/oculos2vans.webp';
import camisa1vans from '../assets/produtos.vans/camisa1vans.webp';

// Imagens de produtos Stussy
import camisa1stussy from '../assets/produtos.stussy/camisa1stussy.webp';
import chapeu2stussy from '../assets/produtos.stussy/chapeu2stussy.webp';
import camisa2stussy from '../assets/produtos.stussy/camisa2stussy.webp';
import shorts2stussy from '../assets/produtos.stussy/shorts2stussy.webp';
import shorts1stussy from '../assets/produtos.stussy/shorts1stussy.webp';
import chapeu1stussy from '../assets/produtos.stussy/chapeu1stussy.webp';
import moletom1stussy from '../assets/produtos.stussy/moletom1stussy.webp';
import moletom2stussy from '../assets/produtos.stussy/moletom2stussy.webp';
import camisa3stussy from '../assets/produtos.stussy/camisa3stussy.webp';
import camisa4stussy from '../assets/produtos.stussy/camisa4stussy.webp';
import camisa5stussy from '../assets/produtos.stussy/camisa5stussy.webp';
import moletom3stussy from '../assets/produtos.stussy/moletom3stussy.webp';



export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      id: 1,
      name: 'Tênis Adidas Adi2000',
      image1: adi2000Img1,
      image2: adi2000Img2,
      lancamento: true,
    },
    {
      id: 2,
      name: 'Tênis NewBalance 9060',
      image1: nbImg1,
      image2: nbImg2,
      lancamento: true,
    },
    {
      id: 3,
      name: 'Tênis Nike Air Jordan',
      image1: jordanImg1,
      image2: jordanImg2,
      lancamento: true,
    },
    {
      id: 4,
      name: 'Tênis Adidas Bad Bunny',
      image1: sambaImg1,
      image2: sambaImg2,
      lancamento: true,
    },
    {
      id: 5,
      name: 'Tênis Nike Air Force',
      image1: forceImg1,
      image2: forceImg2,
      lancamento: true,
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
      image: mochila1vans     
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
      name: 'Oculos Vans 2', 
      price: 'R$249,99', 
      image: oculos2vans 
    },
    { 
      id: 83, 
      name: 'Camiseta Stussy 1', 
      price: 'R$99,99', 
      image: camisa1stussy 
    },
    { 
      id: 84, 
      name: 'Camiseta Stussy 2', 
      price: 'R$109,99', 
      image: camisa2stussy 
    },
    { 
      id: 85, 
      name: 'Camiseta Stussy 3', 
      price: 'R$119,99', 
      image: camisa3stussy 
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

  ])

  const carrinho = ref([])

  function addCarrinho(item){
    carrinho.value.push(item)
  }

  function getProductById(id) {
    for (let product of products.value) {
      if (product.id == id) {
        return product
      }
    }
    return null
  }

  return { products, getProductById, carrinho, addCarrinho }
})
