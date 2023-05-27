let inp = document.querySelectorAll('.form-control');
let btn = document.querySelector('.btn');

btn.onclick = () => {

   let inputValueOne = inp[0].value
   let inputValueTwo = inp[1].value
   let obj = {name: inputValueOne, lastname: inputValueTwo}

   fetch('https://asadbek-insta.onrender.com/data', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(obj)
   }).then(res => {
       res.status === 201 ? alert('Succes') : alert('error')
       inp[0].value = ''
       inp[1].value = ''
   })

}
