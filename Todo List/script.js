const inpList = document.querySelector('.inpList');
const btnAdd = document.querySelector('.btnAdd');
const lists = document.querySelector('.lists');

btnAdd.addEventListener('click', () => {

    if(inpList.value === '') {
        alert('Please enter to do something in the box');
        return;
    }

    const div = document.createElement('div');
    div.className = 'card';

    const divText = document.createElement('p');
    divText.innerText = inpList.value;
    
    const btnRemove = document.createElement('p');
    btnRemove.innerText = 'x';
    btnRemove.className = 'btnRemove';

    btnRemove.addEventListener('click', () => {
        div.remove();
    });

    div.append(divText);
    div.append(btnRemove);
    lists.appendChild(div);

    inpList.value = '';

});