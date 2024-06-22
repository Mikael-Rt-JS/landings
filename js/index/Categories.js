class Categories{
  static render_categories(categories_data,categories_el){
    let categoriesBlock=document.querySelector(categories_el)
    let main_h2=document.querySelector(`#main_h2`);
    let str='';
    let id=0;
    let for_h2=0;
    main_h2.innerHTML=''
    categoriesBlock.innerHTML='';
    for(let i=0;i<categories_data.length;i++){
      if(i){
        str+=`<button id="categ_${categories_data[i]['id']}" class="landing_nav_btn">${categories_data[i]['categories_nameRU']}</button>`
      }else{
        id=i+1;
        for_h2=0
        str+=`<button id="categ_${categories_data[i]['id']}" class="landing_nav_btn landing_nav_btn-active">${categories_data[i]['categories_nameRU']}</button>`
      }
    }
    main_h2.innerText=`${categories_data[for_h2]['categories_nameRU']}`;
    categoriesBlock.innerHTML=str;
    
    // Cards.empty_data(".main_cards")
    this.get_saits(id)
  }

  
  static async get_saits(categories_id){
    let data=await fetch('./json/saits.json')
    .then(res=>res.json())
    .then(data=>data)
    .catch(err=>console.log(err))
    let newData=[];
    if(await data){
      for(let i=0;i<data.length;i++){
        if(data[i]['categories_id']===categories_id){
          newData.push(data[i])
        }
      }
      Cards.empty_data(".main_cards",newData)
    }
  }
}
