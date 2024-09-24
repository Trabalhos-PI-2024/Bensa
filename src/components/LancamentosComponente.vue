<template>
    <div class="lancamentos">
      <div class="title">
        <h3>Lançamentos</h3>
      </div>
      <div class="mainProdutos">
        <div class="product">
          <img src="../assets/img/Lancamentos/adi2000.webp" alt="" />
        </div>
        <div class="product">
          <img src="../assets/img/Lancamentos/nb.webp" alt="" />
        </div>
        <div class="product">
          <img src="../assets/img/Lancamentos/jordan.webp" alt="" />
        </div>
        <div class="product">
          <img src="../assets/img/Lancamentos/samba.webp" alt="" />
        </div>
        <div class="product">
          <img src="../assets/img/Lancamentos/force.webp" alt="" />
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .lancamentos {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-top: 40px;
   
  }
  .lancamentos .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .lancamentos .title h3 {
    transform: rotate(270deg);
    border-bottom: 1.5px solid #0d0d0d;
    font-size: 22px;
  }
  
  .lancamentos .mainProdutos {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .lancamentos .mainProdutos .product{
      width: 210px;
      height: 210px;
      border: 1px solid #e7e7e7e7;
      margin: 0 40px;
      
  }
  .lancamentos .mainProdutos .product img{
    width: 207px;
    height: 207px;
  }
  </style>