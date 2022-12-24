const chk = document.querySelector('.chk')
const div = document.querySelector('#container')
chk.addEventListener('change', () => {
     
    div.classList.toggle('dark')
 
})
// essas linhas funcionasm de forma que ele "escuta" a mudança de estado do checkbox e com o uso do toglle ele põe se não tiver e tira se tiver 