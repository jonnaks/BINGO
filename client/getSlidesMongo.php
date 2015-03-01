<?php
header('Content-type: text/html; charset=utf-8');

$q = $_GET['q'];

$con = mysqli_connect('movinmedia.se.mysql','movinmedia_se','qF2D4n8j','movinmedia_se');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"movinmedia_se");
$sql = "SELECT * FROM `Slide` WHERE startDate <= '" . $q . "' AND endDate > '". $q . "'";
$result = mysqli_query($con,$sql);

$a = array();
$jsonArrayList = array();

while($row = mysqli_fetch_array($result)) {

  $a['id']=$row["id"];
  $a['type']=$row["type"];
  $a['startDate']=$row["startDate"];
  $a['endDate']=$row["endDate"];
  $a['imgURL']=$row["imgURL"];
  $a['text1']=$row["text1"];
  $a['text2']=$row["text2"];
  
  $jsonArrayList[] = json_encode($a);
  
}

echo(json_encode($jsonArrayList));
mysqli_close($con);
?>