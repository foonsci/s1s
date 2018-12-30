

    <?php
$servername = "localhost";
$username = "id8285611_chem";
$password = "F00nSc1All1ance";
$dbname = "id8285611_foonsci";
$conn=mysqli_connect($servername,$username,$password,$dbname);
if(!$conn){
exit;
}


$sql = "SELECT md FROM ei";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {
        echo "<br> id: ". $row["md"].  "<br>";
    }
} else {
    echo "0 results";
}







mysqli_close($conn); 

?>

