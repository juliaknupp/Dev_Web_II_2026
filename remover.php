<?php
declare(strict_types=1);
require_once '../model/funcoesBD.php';
require_once '../../util/funcoes.php';
require_once '../model/funcoes.php';
$id= validarId($_GET['id']);
$linhasAfetadas=0;
try{
    /**@var callable $remover */
    $linhasAfetadas=$remover($id);
}catch(PDOException $e){
    responderJson(["erro"=> "Erro ao remover aluno."],400);

}
responderJson(null, 204);
?>