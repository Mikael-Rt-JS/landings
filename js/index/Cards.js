class Cards{
  // Вызывается из класса Categories
  static empty_data(el_name,data=[]){
    if(data.length){
      this.render_card(el_name,data)
    }else{
      this.not_found(".main_cards",".pagination_group_btn")
    }
  }
  
  static render_card(el_name,data){
    let main_cards=document.querySelector(el_name)
    main_cards.innerHTML=''
    let str="";
    let dataLength=data.length;
    
    for(let i=0;i<data.length;i++){
      str+=`<div class="main_card">
        <div>
          <img src="./sait_images/${data[i]['image']}" alt="${data[i]['title']}" title="${data[i]['title']}"/>
        </div>
        <h3>${data[i]['title']}</h3>
        <div class="main_card_btngroup">
          <a href="${data[i]['demo_link']}">Demo</a>
          <a href="${data[i]['info_link']}?id=${data[i]['id']}">Info</a>
        </div>
      </div>`
    }
    main_cards.innerHTML=str
    this.render_pagination(dataLength);
  }
  
  static render_pagination(dataLength,el_name){
    let pagination_group_btn=document.querySelector(".pagination_group_btn")

    if(dataLength<=8){
      this.pp_nullifier(pagination_group_btn,el_name)
    }else if(dataLength>8){
      let pp_start=document.querySelector('.pp_start')
      let pp_end=document.querySelector('.pp_end')
      pp_start.innerHTML=1;
      pp_end.innerHTML=dataLength;
      let pagination_group_btn=document.querySelector('.pagination_group_btn')
      let paginationCount=Math.ceil(dataLength/8)

      if(paginationCount===2){
        pagination_group_btn.innerHTML='';
        pagination_group_btn.innerHTML=`<button>1</button><button>2</button>`
      }else if(paginationCount===3){
        pagination_group_btn.innerHTML='';
        pagination_group_btn.innerHTML=`<button>1</button>
        <button>2</button>
        <button class="btn_hidden">3</button>`
      }else if(paginationCount===4){
        pagination_group_btn.innerHTML='';
        pagination_group_btn.innerHTML=`<button class="btn_hidden">1</button>
        <button>2</button>
        <button>3</button>
        <button class="btn_hidden">4</button>`
      }else if(paginationCount===5){
        pagination_group_btn.innerHTML='';
        pagination_group_btn.innerHTML=`<button class="btn_hidden">1</button>
        <button>2</button>
        <button>3</button>
        <button class="btn_hidden">4</button>
        <button class="btn_hidden">5</button>`
      }else if(paginationCount>=6){
        pagination_group_btn.innerHTML='';
        pagination_group_btn.innerHTML=`<button class="btn_hidden">1</button>
        <button class="btn_hidden">2</button>
        <button>3</button>
        <button>4</button>
        <button class="btn_hidden">5</button>
        <button class="btn_hidden">6</button>`
      }
    }
  }

  
  static pp_nullifier(pagination_group_btn){
    let pp_start=document.querySelector('.pp_start')
    let pp_end=document.querySelector('.pp_end')
    pp_start.innerHTML=''
    pp_end.innerHTML=''
    pagination_group_btn.innerHTML=''
  }
  
  static not_found(el_name,pagination_name){
    let main_cards=document.querySelector(el_name)
    let pagination_group_btn=document.querySelector(pagination_name)
    main_cards.innerHTML=''
    this.pp_nullifier(pagination_group_btn,main_cards)
    
    main_cards.innerHTML=`<div class="main_card">
      <div>
        <img src="https://www.freeparking.co.nz/learn/wp-content/uploads/2023/06/768x385-21.png" alt="Not found!" title="Not found!"/>
      </div>
      <h3>Not found!</h3>
      <div class="main_card_btngroup"></div>
    </div>`;
  }
}


/*
<div class="main_card">
  <div>
    <img src="./sait_imgs/landing1_header.html.png" alt="Сreate your online presene" title="Сreate your online presene"/>
  </div>
  <h3>Сreate your online presene</h3>
  <div class="main_card_btngroup">
    <a href="${['demo_link']}">Demo</a>
    <a href="${['info_link']}">Info</a>
  </div>
</div>
*/ 
// Cards.not_found(".main_cards",".pagination_group_btn");
// Cards.empty_data(".main_cards")