
<?php
 $base_donne= new PDO('mysql:host=localhost;dbnom=base de données','root','');

 try{
    $pdo_options[PDO::ATTR_ERRMODE]=PDO::ERRMODE_EXCEPTION;
    $base_donne= new PDO('mysql:host=localhost;dbnom=base de données','root','',$pdo_options);
    echo "Connexion reussie";
 }catch(Exception $e){
    die('Erreur:'.$e->getMessage());
 }
?>
