package com.cotuca.cepbackend.repositories;

import com.cotuca.cepbackend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
