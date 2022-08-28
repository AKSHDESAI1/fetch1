let btn = document.getElementById("btn");
let first = document.getElementById("first");
let second = document.getElementById("second");
let body1 = document.getElementById("body1");

const makeRequest = () => {
    // console.log("Button Clicked");
    // btn.setAttribute('disabled', 'disabled');
    first.classList.add('d-none');
    second.classList.remove('d-none');

    const promiseObj = fetch("/fetch1/data.txt");
    console.log('promiseObj', promiseObj);
    promiseObj.then((res) => {
        console.log('meow');
        console.log('res', res);
        return res.text();
    }).then((data) => {
        // btn.removeAttribute('disabled');
        first.classList.remove('d-none');
        second.classList.add('d-none');    
        console.log('data', data);
        body1.innerHTML = data;
    })
}

btn.addEventListener('click', makeRequest); 1
