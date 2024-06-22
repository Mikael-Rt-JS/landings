let ranges=document.querySelectorAll(`.skill_range`);
let label_skill=document.querySelectorAll(`.label_skill`);
let range_num=document.querySelectorAll(`.range_num`);

// https://www.youtube.com/watch?v=rHKiMAZYMoQ
function skills_render(skillsInfo){
  for(let i=0;i<skillsInfo.length;i++){
    label_skill[i].innerHTML=`${skillsInfo[i]['skillName']}`;
    ranges[i].value=skillsInfo[i]['percent'];
    ranges[i].style=`background:-webkit-linear-gradient(left,#36c569 0%,#36c569 ${skillsInfo[i]['percent']}%,#fff 0%,#fff 100%);
    background:-moz-linear-gradient(left,#36c569 0%,#36c569 ${skillsInfo[i]['percent']}%,#fff 0%,#fff 100%);`
    range_num[i].innerHTML=`${skillsInfo[i]['percent']}%`;
    range_num[i].style.left=`${skillsInfo[i]['percent']-5}%`;
  }
}

let skills=[
  {
    id:1,
    skillName:'C++ development',
    percent: 98
  },
  {
    id:2,
    skillName:'.Net',
    percent: 75
  },
  {
    id:3,
    skillName:'HTML5',
    percent: 83
  },
  {
    id:4,
    skillName:'JQuery',
    percent: 68
  },
  {
    id:5,
    skillName:'Angular',
    percent: 93
  },
];

skills_render(skills);