const Email = document.getElementById('_mail');
const Otv = document.getElementById('_otv');
const Numph = document.getElementById('_phone');
const Tem = document.getElementById('_tem');

const Tp1 = document.getElementById('_Tp1');
const Tp2 = document.getElementById('_Tp2');
const Tp3 = document.getElementById('_Tp3');
const Tp4 = document.getElementById('_Tp4');

const contactRadio = document.getElementsByName('r');


Email.classList.add('hidden');
Otv.classList.add('hidden');
Numph.classList.add('hidden');
Tem.classList.add('hidden')

for(let i = 0;i<contactRadio.length;i++)
{
  contactRadio[i].addEventListener('change',function(){
  switch (this.value) {
    case 'SV':
      Email.classList.remove('hidden');
      Otv.classList.remove('hidden');
      Numph.classList.remove('hidden');
      Tem.classList.remove('hidden');
      break;
    case 'SP':
      Email.classList.remove('hidden');
      Otv.classList.remove('hidden');
      Numph.classList.add('hidden');
      Tem.classList.add('hidden');
      break;
    case 'OP':
      Email.classList.add('hidden');
      Otv.classList.add('hidden');
      Numph.classList.add('hidden');
      Tem.classList.remove('hidden');
      break;
    case 'ZA':
      Email.classList.remove('hidden');
      Otv.classList.remove('hidden');
      Numph.classList.remove('hidden');
      Tem.classList.add('hidden');
      break;


                      }
  });




}
