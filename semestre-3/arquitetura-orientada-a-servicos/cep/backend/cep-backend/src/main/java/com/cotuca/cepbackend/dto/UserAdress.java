package com.cotuca.cepbackend.dto;

import com.cotuca.cepbackend.entities.User;
import com.cotuca.cepbackend.services.adressByCep.Logradouro;

import java.util.Objects;

public class UserAdress {
    private User user;
    private Logradouro adress;

    public UserAdress() {
    }

    public UserAdress(User user, Logradouro adress) {
        this.user = user;
        this.adress = adress;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Logradouro getAdress() {
        return adress;
    }

    public void setAdress(Logradouro adress) {
        this.adress = adress;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserAdress that = (UserAdress) o;
        return Objects.equals(user, that.user) && Objects.equals(adress, that.adress);
    }

    @Override
    public int hashCode() {
        return Objects.hash(user, adress);
    }
}
