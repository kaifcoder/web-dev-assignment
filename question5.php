 <?php 
    $str = "I like a PHP language";
    $pattern = "/PHP/";
    $result = preg_match($pattern, $str);
    if($result){
        echo "The string contains PHP";
    }else{
        echo "The string does not contain PHP";
    }
    ?>

<?php
$string = 'abcde$ddfd @abcd )der]';
echo 'Old string : '.$string.'';
$newstr = preg_replace("/[^A-Za-z0-9 ]/", '', $string);
echo 'New string : '.$newstr."\n";
?>
