package com.cotuca.cepbackend.config;

import com.cotuca.cepbackend.entities.User;
import com.cotuca.cepbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("dev")
public class DevConfig implements CommandLineRunner {
  @Autowired
  private UserRepository userRepository;

  @Override
  public void run(String... args) throws Exception {
//    User u1 = new User(null, "João dos Santos", "23", "13015301", "1080");
//
//    userRepository.save(u1);
  }
}
