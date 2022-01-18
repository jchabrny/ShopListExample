package de.neuefische.backend.controller;


import de.neuefische.backend.model.ListItem;
import de.neuefische.backend.model.ShopList;
import de.neuefische.backend.service.ShopListService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/lists")
public class ShopListController {

    private final ShopListService shopListService;

    public ShopListController(ShopListService shopListService) {
        this.shopListService = shopListService;
    }

    @GetMapping()
    public List<ShopList> getAllLists(){
        return shopListService.getAll();
    }
}
