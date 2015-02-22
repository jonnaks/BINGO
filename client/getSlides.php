<?php
$q = intval($_GET['q']);

$con = mysqli_connect('movinmedia.se.mysql','movinmedia_se','qF2D4n8j','movinmedia_se');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT * FROM Slide WHERE id=1";
$result = mysqli_query($con,$sql);

echo "<table border='1'>
<tr>
<th>id</th>
<th>food</th>
<th>startDate</th>
<th>endDate</th>
<th>text1</th>
<th>text2</th>
</tr>";

while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['FirstName'] . "</td>";
  echo "<td>" . $row['LastName'] . "</td>";
  echo "<td>" . $row['Age'] . "</td>";
  echo "<td>" . $row['Hometown'] . "</td>";
  echo "<td>" . $row['Job'] . "</td>";
  echo "</tr>";
}
echo "</table>";

mysqli_close($con);
?>