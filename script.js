document.getElementById('contactForm').addEventListener('submit', function(event){
  event.preventDefault(); // Pour éviter l'envoi réel du formulaire

  // Ici, vous pouvez ajouter une validation ou un traitement supplémentaire
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if(name && email && message) {
    // Envoyez les données à votre serveur ou affichez un message de réussite
    console.log('Nom:', name, 'Email:', email, 'Message:', message);
    alert('Merci pour votre message, ' + name + '!');
  } else {
    alert('Veuillez remplir tous les champs.');
  }
});