function maxLengthCheck(object)
  {
    if (object.value.length > 4)
      object.value = object.value.slice(0, 4)
  }

  function burger() {
    const BGR_BUT = document.querySelector('.header_burger');
    const BGR_BACKGROUND = document.querySelector('.__transparent_bg');
    const BGR_MENU = document.querySelector('.__burger_opened');

    BGR_BUT.addEventListener('click', () => {
        BGR_BUT.classList.toggle('header_burger_active');
        BGR_BACKGROUND.classList.toggle('elem_active');
        BGR_MENU.classList.toggle('elem_active');
        document.body.classList.toggle('body__active');
    })
    BGR_BACKGROUND.addEventListener('click', () => {
        BGR_BUT.classList.toggle('header_burger_active');
        BGR_BACKGROUND.classList.toggle('elem_active');
        BGR_MENU.classList.toggle('elem_active');
        document.body.classList.toggle('body__active');
    })
}

function inputsConnect () {
  const valueCollection = document.querySelectorAll('.__radio_field');
  const field = document.querySelector('.__another_field');
  const legends = document.querySelector('.__slider_values').children;
  let index = -1;
  for (i of valueCollection) {
    index++; 
      if (i.checked === true) {
        field.value = i.value;
        legends[index].style.color = 'orange';
      }
      else {
        legends[index].style.color = 'black'
      }
  }
  return i.value;  
}

function inputField () {
  const valueCollection = document.querySelectorAll('.__radio_field')
  const field = document.querySelector('.__another_field');
  const legends = document.querySelector('.__slider_values').children;
  let index = -1;
  for (i of legends) {
    index++
    if (field.value === i.innerHTML.slice(1)) {
      legends[index].style.color = 'orange';
      valueCollection[index].checked = true;
    }
    else {
      legends[index].style.color = 'black';
      valueCollection[index].checked = false;
    }    
  }
  return field.value;
}

document.querySelector('#range_list').addEventListener('click', inputsConnect);
document.querySelector('.__another_field').addEventListener('input', inputField);

burger();
inputsConnect();