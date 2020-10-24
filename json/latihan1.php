<?php

// $mahasiswa= [
//     [
//         "nama"  => "Koirul",
//          "nim"   => "3125111205",
//          "email" => "koirul.2593@gmail.com"
//     ],[
//     "nama"  => "panji",
//     "nim"   => "3125111206",
//     "email" => "koirul.11@gmail.com"
//     ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=phpdasar', 'root', '');
$db =$dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data=json_encode($mahasiswa);
echo $data;

?>