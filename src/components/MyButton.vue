<template>
    <button class="my-btn">
      <slot />  <!--親コンポーネントで呼ばれるときにタグ内部<MyButton>○○</MyButton>指定された文字、画像を受け取る。propよりも限定的-->
    </button>
  </template>
  
  <style>
  .my-btn {
    color: #fff;
    background-color: #333;
    margin-left: 0.5em;
    border-radius: 0.5em;
  }
  </style>
  