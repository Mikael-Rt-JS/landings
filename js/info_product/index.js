function render_user(user_obj){
  let user_info=document.querySelector(`.user_info`)
  let str=`<img class="maket_sait_img" src="${user_obj['avatar']}" alt="Avatar" title="Avatar"/>
  <div class="about_users">
    <h3>${user_obj['username']} ${user_obj['lastname']}</h3>
    <i>Profession: ${user_obj['profession']}</i>
    <i>Position: ${user_obj['position']}</i>
    <span>ID: ${user_obj['id']}</span>
  </div>`
  user_info.innerHTML=str;
}

function render_info(sait_Obj,demoLink){
  let main_sait_info=document.querySelector(`.main_sait_info`);
  let str=`<h1>${sait_Obj['title']}</h1>
    <img class="image_sait" src="./sait_images/${sait_Obj['full_image']}" alt="Sait images" title="Sait images"/>
    <div class="main_info_group">
      <div class="look">
        <h4>Демо просмотр</h4>
        <a class="btn_demo" href="${demoLink}">Demo</a>
        <img class="qr_code" src="./qr_code/${sait_Obj['qr_code_image']}" alt="QR Code" title="QR Code"/>
      </div>
      <div class="description_sait">
        <h3>О проекте</h3>
        <p class="description">
          ${sait_Obj['description']}
        </p>
      </div>
    </div>`
  main_sait_info.innerHTML=str
}

window.onload=async e=>{
  let getSaits=await fetch('./json/saits.json')
  .then(res=>res.json()).then(data=>data).catch(err=>console.log(err));
  let getUsers=await fetch('./json/users.json')
  .then(res=>res.json()).then(data=>data).catch(err=>console.log(err));
  
  let search=+window.location.search.replace('?id=','')

  if(await getSaits){
    if(await getUsers){
      let sait={};
      
      if(typeof search==='number' && search>0){
        let user_id=0;
        sait=getSaits.filter((item,index)=>{ 
            if(item.id===search){
              user_id=item.user_id
              return item;
            }
        })[0];
        let user=getUsers.filter((item,index)=>item.id===user_id)[0]
        let newLinkBack=sait['info_link'].replace('./','').replace('.html','')
        let demoLink=`./landing1.html?id=${search}&p=${newLinkBack}`;
        
        render_user(user)
        render_info(sait,demoLink)
      }else{
        window.location.href='./index.html';
      }
      
    }
  }
}