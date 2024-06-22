let user_info=document.querySelector(`.user_info`)

window.onload=async e=>{
  if(window.location.search){
    let back_home_a=document.querySelector('.back_home_a')
    let search=window.location.search.replace('?id=','')
    search=search.replace('&p=','|')
    searchArr=search.split('|');
    console.log(search.split('|'))
    back_home_a.href=`../${searchArr[1]}.html?id=${searchArr[0]}`;
  }
  
}