package de.neuefische.backend.service;

import de.neuefische.backend.model.ListItem;
import de.neuefische.backend.model.ShopList;
import de.neuefische.backend.repo.ShopListRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShopListService {

    private final ShopListRepo shopListRepo;


    public ShopListService(ShopListRepo shopListRepo) {
        this.shopListRepo = shopListRepo;
    }

    public List<ShopList> getAll() {
        return shopListRepo.findAll();
    }

    public Optional<ShopList> saveNewList(String listName) {
        if (shopListRepo.findById(listName).isEmpty()){
             return Optional.of(shopListRepo.save(ShopList.builder().listName(listName).build()));
        }
        return Optional.empty();
    }

    public Optional<ShopList> findByName(String whichList) {
        return shopListRepo.findById(whichList);
    }
}
