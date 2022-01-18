package de.neuefische.backend.service;

import de.neuefische.backend.model.ListItem;
import de.neuefische.backend.model.ShopList;
import de.neuefische.backend.repo.ShopListRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopListService {

    private final ShopListRepo shopListRepo;


    public ShopListService(ShopListRepo shopListRepo) {
        this.shopListRepo = shopListRepo;
    }

    public List<ShopList> getAll() {
        return shopListRepo.findAll();
    }
}
