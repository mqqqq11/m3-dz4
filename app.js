
//1

const show = document.querySelector('.show');
const wrapper = document.querySelector('.wrapper');

show.addEventListener('click', () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();

    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)

        wrapper.innerHTML = "";

        data.forEach((personData, index) => {
            const person = document.createElement('div')
            person.setAttribute('class', `person${index}`)

            wrapper.style.backgroundImage = 'url(/images/image-fon.jpg)'
            person.innerHTML = `
            <h3>${personData.name}</h3>
            <h4>${personData.age} лет</h4>
            <span>${personData.info}</span>
            <img src="${personData.img}" alt="">
            `
            wrapper.append(person);
        });
    });
});



//2

const xhr = new XMLHttpRequest();
xhr.open('GET', 'data1.json')
xhr.setRequestHeader('Content-Type', 'application/json')
xhr.send();
xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response);
    console.log(data);
})