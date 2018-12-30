

    <?php
$servername = "localhost";
$username = "id8285611_chem";
$password = "F00nSc1All1ance";
$dbname = "id8285611_foonsci";
$conn=mysqli_connect($servername,$username,$password,$dbname);
if(!$conn){
exit;
}


$qn = $_REQUEST['qn'];
$qn = $qn + 2;

    $md="";
for ($i=0;$i <= $qn; $i++) {
    $q= 'q'.$i;

$md = $md. $q.":".$_REQUEST[$q].";";


}



$admt = "SELECT * from ei where md ='$md'";
 if ($result=mysqli_query($conn,$admt))
  {

  
$ei = "INSERT INTO ei (md) VALUES ('$md')";

if(mysqli_query($conn, $ei)) {
   echo  "can";
}else{
    echo  "cannot";
 



}

}


mysqli_close($conn); 

?>

