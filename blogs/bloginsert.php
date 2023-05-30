<html>
<body>
<?php
session_start();
$get=$_POST;
if ($get!=null)
{
date_default_timezone_set('Iran');
$f=fopen('blog.txt','a+');
fputs($f,$get['titr']);
fputs($f,"\r\n");
$s=explode("\r\n",$get['matn']);
$get['matn']=implode('<br>',$s);
fputs($f,$get['matn']);
fputs($f,"\r\n");
fputs($f,date('Y/m/d'));
fputs($f,"\r\n");
fputs($f,$_SESSION['loggedin']);
fputs($f,"\r\n");
fclose($f);
echo '<center><h1>Information submited seccefully!</h1><br><h6><a href="blog.php">visit posts.</a></h6></center>';
}
else
echo '<center><h1>First enter something!</h1><br><h6><a href="bloginsert.html">send post.</a></h6></center>';
?>
</body>
</html>
