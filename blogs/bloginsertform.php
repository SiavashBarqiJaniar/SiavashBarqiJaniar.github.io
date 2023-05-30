<html>
<body>
<?php
session_start();
if ($_SESSION['loggedin']==true)
{
echo '<center><form action="bloginsert.php" method="post">
Titr : <input type="text" name="titr"/><br>
passage : <textarea name="matn"></textarea>
<input type="submit" value="submit"/>
</form></center>';
}
else
echo 'First <a href="loginform.php">sign in</a>!';
?>
</body>
</html>