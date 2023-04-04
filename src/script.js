function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

const a = document.getElementById('testation');
a.addEventListener("click", () => {
    const documents = {'min': document.getElementById('lenghtmin').value,'max': document.getElementById('lenghtmax').value, 'text': document.getElementById('text')}
    if (documents['min'] != '' && documents['max'] != '') {
    documents['text'].innerHTML = 'Votre mot de passe est : ' + random(documents['min'], documents['max'])
    documents['text'].setAttribute('class', 'flex')
    } else {
        alert('Veuillez transmettre toutes les informations demandées')
    }
});
