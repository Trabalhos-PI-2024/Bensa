<template>
    <div class="lancamentos">
      <div class="title">
        <h3>Lançamentos</h3>
      </div>
      <div class="mainProdutos">
        <div class="product">
          <img src="" alt="" />
        </div>
        <div class="product">
          <img src="" alt="" />
        </div>
        <div class="product">
          <img src="" alt="" />
        </div>
        <div class="product">
          <img src="" alt="" />
        </div>
        <div class="product">
          <img src="" alt="" />
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
      width: 150px;
      height: 150px;
      border: 1px solid;
      margin: 0 30px;
      background: #e7e7e7;
  }
  </style>