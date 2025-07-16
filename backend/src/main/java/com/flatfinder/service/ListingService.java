package com.flatfinder.service;

import com.flatfinder.model.Listing;
import com.flatfinder.repository.ListingRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ListingService {
    private final ListingRepository repo;

    public ListingService(ListingRepository repo) {
        this.repo = repo;
    }

    public List<Listing> getAll() {
        return repo.findAll();
    }

    public Listing getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Listing create(Listing listing) {
        return repo.save(listing);
    }
}
