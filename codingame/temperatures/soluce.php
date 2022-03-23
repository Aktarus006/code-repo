<?php
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// $n: the number of temperatures to analyse
fscanf(STDIN, "%d", $n);
$inputs = explode(" ", fgets(STDIN));
$result = 0;
$delta = 10000;
for ($i = 0; $i < $n; $i++)
{
    $t = intval($inputs[$i]); // a temperature expressed as an integer ranging from -273 to 5526
    if (abs($t) < $delta) {
        $result = $inputs[$i];
        $delta = abs($t);
    }

    elseif (abs($t) == $delta) {
        $result = $result > $inputs[$i] ? $result : $inputs[$i];
    }
}

// Write an answer using echo(). DON'T FORGET THE TRAILING \n
// To debug: error_log(var_export($var, true)); (equivalent to var_dump)

echo($result."\n");
?>
