package com.example.backendcep.resources;

import com.example.backendcep.services.LogradouroService;
import com.example.backendcep.services.adressByCep.Logradouro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/")

public class LogradouroResource {
    @Autowired
    private LogradouroService logradouroService;

    @GetMapping(value = "/{cep}")
    public ResponseEntity<Logradouro> getByCep(@PathVariable String cep) {
        Logradouro logradouro = logradouroService.findByCep(cep);

        return ResponseEntity.ok().body(logradouro);
    }
}
