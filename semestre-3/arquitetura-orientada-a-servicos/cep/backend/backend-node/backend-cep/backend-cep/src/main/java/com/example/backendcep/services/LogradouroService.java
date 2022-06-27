package com.example.backendcep.services;

import com.example.backendcep.services.adressByCep.ClienteWS;
import com.example.backendcep.services.adressByCep.Logradouro;
import org.springframework.stereotype.Service;

@Service
public class LogradouroService {
    public Logradouro findByCep(String cep) {
        Logradouro logradouro = null;

        try {
            logradouro = (Logradouro) ClienteWS.getObjeto(Logradouro.class, "https://api.postmon.com.br/v1/cep", cep);
        } catch (Exception erro) {
            System.err.println(erro.getMessage());
        }

        return logradouro;
    }
}
