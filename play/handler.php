<?php
session_start();
$cpoints = $_SESSION["points"];
$_SESSION["points"] = $cpoints + $_POST["points"];
echo $cpoints;
// ); Dosn't Work ! $_POST["points"] = 0; !
?>
