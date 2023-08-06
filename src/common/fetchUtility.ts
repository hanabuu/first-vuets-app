/**
 * fetchCommon.js
 * @note フェッチユーティリティ
 */
"use strict";


/**
 * @brief   fetchRequest共通関数
 * @param   {in}  url     アクション名 
 * @param   {in}  prams   パラメータ
 * @param   {out} resFunc 処理成功時に呼び出す関数名
 * @param   {out} ngFunc  処理失敗時に呼び出す関数名
 * @note    https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch#response_%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88
 */
const fetchRequest = (url,prams,resFunc,ngFunc): void => {
  console.log(url);
  fetch(url)
  .then( response=> {
    if(!response.ok){
      console.log(response.status);
      throw new Error(response.status + ":" + response.statusText);
    }
    return response.json();
  })
  .then( json=>{
    //console.log("json:" + json);
    resFunc(json);
  })
  .catch( err => {
    //console.log(err);
    ngFunc(err);
  });
}

export default {
  fetchRequest
}

