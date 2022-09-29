function dropDownList() {
    fetch('https://dog.ceo/api/breeds/list')
        .then(function (a) {
            return a.json();
        }).then(function (resp) {
            resp.message.forEach(function (dog__breed) {
                var breed = document.createElement('option')
                breed.setAttribute('value', dog__breed)
                breed.text = dog__breed
                document.getElementById('breeds').appendChild(breed)
            })
        })
}

function counterF() {
    var breed__counter = document.getElementById("counter")
    document.getElementById('counter').addEventListener('input', function () {
        if (parseInt(this.value) >= 0) {
            this.setAttribute('value', this.value)
        } else this.setAttribute('value', 1)
    })
    document.getElementsByTagName('button')[0].addEventListener('click', addImg)
    for (let i = 0; i < breed__counter.length; i++) {
        breed__counter[i].addEventListener('keydown', function (dog__breed) {
            if (dog__breed.key === 'Enter') {
                dog__breed.preventDefault();
                var countEl = document.getElementById('counter').getAttribute('value')
                if (parseInt(countEl, 10)) {
                    document.getElementsByTagName('button')[0].click()
                }
            }
        })
    }
};

function addImg() {
    var breedSelect = document.getElementById('breeds')
    var breed = breedSelect.options[breedSelect.selectedIndex].value;
    fetch('https://dog.ceo/api/' + (breed === "" ? `breeds/image/random/` :
        `breed/${breed}/images/random/`) + parseInt(document.getElementById('counter').getAttribute('value')))
        .then(function (a) {
            return a.json();
        }).then(function (resp) {
            var fotoes__block = document.getElementById('show__fotoes')
            fotoes__block.innerHTML = ''
            resp.message.forEach(function (dog__breed) {
                let li = document.createElement('li')
                let img = document.createElement('img')
                img.setAttribute('src', dog__breed)
                li.appendChild(img)
                fotoes__block.appendChild(li);
            })
        })
}

dropDownList();
counterF();