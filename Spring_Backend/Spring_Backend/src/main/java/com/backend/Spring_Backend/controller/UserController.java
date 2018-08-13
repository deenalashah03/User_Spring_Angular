package com.backend.Spring_Backend.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.Spring_Backend.model.User;
import com.backend.Spring_Backend.repository.User_Repository;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "application/json")
public class UserController {

	@Autowired
	private User_Repository user_repo;

	@GetMapping("/users")
	public Iterable<User> getUsers() {
		return user_repo.findAll();

	}

	@GetMapping("/user/{id}")
	public Optional<User> getId(@PathVariable Long id) {
		System.out.println("user by id" + user_repo.findById(id).toString());
		return user_repo.findById(id);
	}

	@PostMapping("/user")
	public User addUser(@RequestBody User user) {

		return user_repo.save(user);
	}

	@GetMapping("/user")
	public User vreifyUser(@RequestParam(value = "email") String email) {
		//boolean status = false;
		User user = null;
		try {
			user = user_repo.findByEmail(email);
			
			System.out.println(user.toString());

		} catch (Exception ex) {
		
			System.out.println("User not present");
		}
		return user;

	}

	@PutMapping("/user/{id}")
	public User updateUser(@PathVariable("id") Long Id, @RequestBody Map<String, String> body) {
		User use = user_repo.getOne(Id);
		use.setFname(body.get("fname"));
		use.setLname(body.get("lname"));
		use.setEmail(body.get("email"));
		use.setPassword(body.get("password"));
		return user_repo.save(use);
	}

	@DeleteMapping("/user/{id}")
	public void updateUser(@PathVariable("id") Long Id) {
		user_repo.deleteById(Id);
	}

}
