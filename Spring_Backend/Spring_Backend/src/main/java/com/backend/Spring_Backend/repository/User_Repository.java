package com.backend.Spring_Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.backend.Spring_Backend.model.User;

public interface User_Repository extends JpaRepository<User, Long>{
	
	public User findByEmail(String email) ;

}
