const num = 10;
const bgcolor = ["#76D7C4", "#00308F", "#85C1E9", "#0c0d01", "#B284BE", "#C39BD3","#e30505", "#720d0d", "#3B7A57", "#989c4f" ];

   heart.addEventListener('click', function(){
    const rand1 = getRandomNumber();
    const rand2 = getRandomNumber();
    const rand3 = getRandomNumber();
    const rand4 = getRandomNumber();
    const rand5 = getRandomNumber();
    const rand6 = getRandomNumber();
    const rand7 = getRandomNumber();

    document.body.style.backgroundColor = bgcolor[rand1];
    role.textContent = roles[rand2];
    intern.textContent = internship[rand3];
    job.textContent = work[rand4];
    money.textContent = salary[rand5];
    residence.textContent = home[rand6];
    family.textContent = kids[rand7];
});
function getRandomNumber() {
    return Math.floor(Math.random() * num);
}

 
  