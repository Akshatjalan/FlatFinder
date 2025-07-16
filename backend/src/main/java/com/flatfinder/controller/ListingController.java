package com.flatfinder.controller;

import com.flatfinder.model.Listing;
import com.flatfinder.service.ListingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/listings")
@CrossOrigin(origins = "http://localhost:3000") // React frontend
public class ListingController {
    private final ListingService service;

    public ListingController(ListingService service) {
        this.service = service;
    }

    @GetMapping
    public List<Listing> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Listing getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public Listing create(@RequestBody Listing listing) {
        return service.create(listing);
    }
}
