package com.cotuca.cepbackend.resources;

import com.cotuca.cepbackend.dto.UserAdress;
import com.cotuca.cepbackend.entities.User;
import com.cotuca.cepbackend.services.UserService;
import com.cotuca.cepbackend.services.adressByCep.ClienteWS;
import com.cotuca.cepbackend.services.adressByCep.Logradouro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserResource {
    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> findAll() {
        List<User> list = userService.findAll();

        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<UserAdress> findById(@PathVariable Long id) {
        User obj = userService.findById(id);

        Logradouro logradouro = (Logradouro) ClienteWS.getObjeto(Logradouro.class, "https://api.postmon.com.br/v1/cep", obj.getCep());

        UserAdress userAdress = new UserAdress(obj, logradouro);

        return ResponseEntity.ok().body(userAdress);
    }

    @PostMapping
    public ResponseEntity<User> insert(@RequestBody User newUser) {
        User obj = userService.insert(new User(null, newUser.getName(), newUser.getAge(), newUser.getCep(), newUser.getNumber()));

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();

        return ResponseEntity.created(uri).body(obj);
    }
}
