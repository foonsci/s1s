<?php
$qn = $_REQUEST['qn'];
$ans = array(
    "q1"=>"c",
    "q2"=>"a",
    "q3"=>"a",
    "q4"=>"b",
    "q5"=>"d",
    "q6"=>"b",
    "q7"=>"c",
    "q8"=>"b",
    "q9"=>"b",
    "q10"=>"a",
    "q11"=>"a",
    "q12"=>"a",
    "q13"=>"d",
    "q14"=>"c",
    "q15"=>"c",
    "q16"=>"1.6upto1.8",
    "q17"=>"0.2",
    "q18"=>"b",
    "q19"=>"c",
    "q20"=>"188.56upto188.6",
    "q21"=>"b",
    "q22"=>"b",
    "q23"=>"b",
    "q24"=>"d",
    "q25"=>"d",
    "q26"=>"oleum",
    "q27"=>"d",
    "q28"=>"d",
    "q29"=>"d",
    "q30"=>"c"
    );

$corr = 0;
$length=sizeof($ans);
for ($i=1;$i <= $length; $i++) {
    $q= 'q'.$i;

$uansq = strtolower($_REQUEST[$q]);
if ($uansq !== "" || $uansq !== NULL) {
    if(strpos($ans[$q], 'upto')){
   $ansnum = explode("upto",$ans[$q]);
  if($uansq >= $ansnum[0] && $uansq <= $ansnum[1]){
      $corr++;} else{
            echo $q."2BX2";
        }
    }
    else{
    if ($uansq == $ans[$q]) {
    $corr++;
}  elseif ($uansq !== $ans[$q]){
    echo $q."2BX2";
}
}

} 


}

$marks = $corr/$qn *100;
echo  "A90B". round($marks) . "A90B";
$mk=  round($marks) ;


$rate = array("101", "85", "80", "75", "70", "65", "60", "55", "50", "0");
$view = array("a1", "a2", "b3", "b4", "b5", "b6", "c7", "c8", "f9");
$view2 = array("登峰造极", "登峰造极", "还算不错", "还算不错", "再接再厉", "再接再厉", "低空飞过", "低空飞过", "你要加油");
$length = count($rate)- 1;

for ($x = 0; $x < $length; $x++) {
  $prv = $rate[$x];
   $nxt = $rate[$x + 1]; 

   
  if($mk < $prv and $mk >= $nxt ){
        echo $view[$x] . "A90B";
        echo $view2[$x] . "A90B";
            $str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567891011121314151617181920212223242526';
            $shuffled = str_shuffle($str);
            $str1 = substr($shuffled,1,30);
            $lat = substr_replace($str1, $view[$x], -22, -19);
        echo $lat. "A90B".$_REQUEST['q0'];
      
      
  }

}

?>



