
<?php

try {
    $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
    $bdd = new PDO('mysql:host=localhost;dbname=base_de_donnees;charset=utf8', 'root', '', $pdo_options);
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}


$nom = $_POST['a'];
$prenom = $_POST['b'];
$numero = $_POST['c'];
$depart = $_POST['d'];
$destination = $_POST['e'];
$paiement = $_POST['f'];


$requete = $bdd->prepare('INSERT INTO reservations(nom, prenom, numero, depart, destination, paiement) VALUES(?, ?, ?, ?, ?, ?)');
$requete->execute([$nom, $prenom, $numero, $depart, $destination, $paiement]);

echo " Réservation enregistrée avec succès !";
?>
