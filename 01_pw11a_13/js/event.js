const signup = document.getElementsByTagName('button')[0];

signup.addEventListener('click', () => {
    document.getElementById('modalArea').style.display = 'block';
});

const closeModal = document.getElementsByClassName('closeModal')[0];

closeModal.addEventListener('click', () => {
    document.getElementById('modalArea').style.display = 'none';
});

const modalBg = document.getElementById('modalBg');

modalBg.addEventListener('click', () => {
    document.getElementById('modalArea').style.display = 'none';
});

const button = document.getElementsByClassName('signUpButton')[0];

// エラーメッセージ配列
let errorMes = ["名前を入力してください", "IDを入力してください", "パスワードを入力してください"];

for(let i=0;i<=2;i++){
    const error = document.getElementsByClassName('inputText')[i];
    button.addEventListener('click', () => {
        if(error.value == ""){
            document.getElementsByClassName("alertText")[i].textContent = errorMes[i];
            document.getElementsByClassName("alertText")[i].classList.add('alertBox');
        }
       });
}
