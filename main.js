fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {
    return res.json();
}).then(res => {
    const fragment = document.createDocumentFragment();
    for (let i = 0;i<res.length;i++) {
        // console.log(res[i].id)
        let newel = document.createElement('div')
        newel.id = `userId-${res[i].id}`;
        newel.innerHTML = `<div>${res[i].name}</div>
                            <div>${res[i].email}</div>`;
        fragment.appendChild(newel);
    }
    document.querySelector('.left').appendChild(fragment);
    document.querySelector('#userId-1').click();
}).catch(rej => console.log(`error: ${rej}`))
 

// ////////////////get posts API////////////
function postsApi(userId) {
    // document.getElementById(userId).style.border = 'solid 3px red';
    userId = userId.match(/\d/g).join('');
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(res => {
        return res.json();
    }).then(res => {
        // const fragment = document.createDocumentFragment();
        // for (let i = 0;i<res.length;i++) {
        //     // console.log(res[i].id)
        //     let newel = document.createElement('div')
        //     newel.innerHTML = `<div>${res[i].title}</div><hr>
        //                         <div>${res[i].body}</div>`;
        //     fragment.appendChild(newel);
        // }
        // console.log(fragment)
        // document.querySelector('.right').innerHTML = "";
        // document.querySelector('.right').appendChild(fragment);
        const div = document.createElement('div');
        for (let i = 0;i<res.length;i++) {
            let newel = document.createElement('div')
            newel.innerHTML = `<div>${res[i].title}</div><hr>
                                <div>${res[i].body}</div>`;
            div.appendChild(newel);
        }
        // document.getElementsByClassName('right').id = res[i].id;
        document.querySelector('.right').innerHTML = div.innerHTML;
    })
}

document.querySelector('.left').addEventListener('click', evt => {
    if (evt.target.parentElement.id.includes('userId')) {
        document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'))
        evt.target.parentElement.classList.add('selected');
        postsApi(evt.target.parentElement.id);
    } else if (evt.target.id.includes('userId')) {
        document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'))
        evt.target.classList.add('selected');
        postsApi(evt.target.id);
    }
})

