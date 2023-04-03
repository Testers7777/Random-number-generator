function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

const a = document.getElementById('testation');
a.addEventListener("click", () => {
    const c = document.getElementById('lenghtmin').value;
    const d = document.getElementById('lenghtmax').value;
    if (c != '' && d != '') {
    const b = document.getElementById('text');
    b.innerHTML = 'Votre mot de passe est : ' + random(c, d)
    b.setAttribute('class', 'flex')
    } else {
        alert('Veuillez transmettre toutes les informations demandées')
    }
});