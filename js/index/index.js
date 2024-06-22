let getcategories=document.querySelectorAll(`.landing_nav_btn`);
let landing_nav=document.querySelector(`.landing_nav`);

landing_nav.addEventListener('click',e=>{
  let activeCategories=landing_nav.querySelector(`.landing_nav_btn-active`);
  activeCategories.classList.remove('landing_nav_btn-active');
  e.target.classList.add('landing_nav_btn-active');
  
  let id=+e.target.id.replace('categ_','')
  let main_h2=document.querySelector(`#main_h2`);
  main_h2.innerHTML=''
  main_h2.innerText=e.target.innerText;
  Categories.get_saits(id)
})

window.onload=async e=>{
  let getCategories=await fetch('./json/categories.json')
  .then(res=>res.json()).then(data=>data).catch(err=>console.log(err));
  if(await getCategories){
    Categories.render_categories(getCategories,'.landing_nav')
  }
}
// ".landing_nav"