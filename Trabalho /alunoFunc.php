<?php
    function obterMedia(float $n1, float $n2): float {
        return (($n1 + $n2) / 2);
    }

    function obterSituacao(float $med, string &$situacao): void {
        if ($med >= 6)
            $situacao = "Aprovado";
        else
            $situacao = "Reprovado";
    }

    function responder(int $codStatus, array|null $info): void {
        http_response_code($codStatus);
        die(json_encode($info, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    }
