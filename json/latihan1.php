<?php

$mahasiswa= [
    [
        "nama"  => "Koirul",
         "nim"   => "3125111205",
         "email" => "koirul.2593@gmail.com"
    ],[
    "nama"  => "panji",
    "nim"   => "3125111206",
    "email" => "koirul.11@gmail.com"
    ]
];

$data=json_encode($mahasiswa);
echo $data;

?>