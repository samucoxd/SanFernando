<?php
include 'controlPedido/conexion.php';
include 'includes/header.php'; 
$database = new Connection();
$db = $database->openConnection();
if(!empty($_GET['envio'])){
  $codigo=$_GET['codigo'];
  $nombre=$_GET['nombre'];

  // calling stored procedure command
  $sql = 'insert into cliente(codCliente,nombreCliente) values(:codigo,:nombre)';
 
  // prepare for execution of the stored procedure
  $stmt = $db->prepare($sql);

  // pass value to the command
  $stmt->bindParam(':codigo', $codigo, PDO::PARAM_INT);
  $stmt->bindParam(':nombre', $nombre, PDO::PARAM_STR);

  try {
	$stmt->execute();
	echo "<meta http-equiv='Refresh' content='0;URL=registroCliente.php'>";
  } catch (PDOException $e) {
	  echo $e->getMessage();
  }

}
?>


<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		<form action="#	" method="GET">
			<label for="Codigo">Ingrese Codigo Cliente</label>
			<input type="text" name="codigo" placeholder="ingrese codigo cliente"><br>
			<label for="Codigo">Ingrese Nombre Cliente</label>
			<input type="text" name="nombre" placeholder="ingrese nombre cliente"><br>
			<button type="submit" name="envio" value="envio">Grabar</button>
		</form>
	</body>
	</html>

<?php 
include 'includes/footer.php'; 
?>	