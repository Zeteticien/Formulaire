document.getElementById('contactForm').addEventListener('submit', function(event){
  event.preventDefault(); // Empêche l'envoi traditionnel du formulaire

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Prépare les données du formulaire pour l'envoi
  var formData = {
    name: name,
    email: email,
    message: message
  };

  // Utilise fetch API pour envoyer les données via POST
  fetch('https://hook.eu2.make.com/1tkr4ysfbr6k5csm3okv1mywwwyuhvx3', {
    method: 'POST', // Méthode HTTP pour l'envoi de données
    headers: {
      'Content-Type': 'application/json', // Indique que le corps de la requête est du JSON
    },
    body: JSON.stringify(formData), // Convertit les données du formulaire en chaîne JSON
  })
  .then(response => {
    if(response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    console.log('Success:', data);
    alert('Merci pour votre message, ' + name + '!');
  })
  .catch((error) => {
    console.error('Error:', error);
    alert('Une erreur s\'est produite lors de l\'envoi de votre message.');
  });
});
