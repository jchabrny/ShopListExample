package de.neuefische.backend.controller;

import de.neuefische.backend.api.DtoListname;
import de.neuefische.backend.model.ShopList;
import de.neuefische.backend.service.ShopListService;
import org.springframework.web.bind.annotation.*;

import java.security.InvalidParameterException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

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

    @PostMapping()
    public ShopList postNewList(@RequestBody DtoListname listName){
        Optional<ShopList> optionalShopList = shopListService.saveNewList(listName.getListName());
        return optionalShopList.orElseThrow(() -> new InvalidParameterException("List with Name: " + listName.getListName() + " already exists!"));
    }

    @GetMapping("/{whichList}")
    public ShopList getListByName (@PathVariable String whichList){
        Optional<ShopList> optionalShopList = shopListService.findByName(whichList);
        return optionalShopList.orElseThrow(() -> new NoSuchElementException("List with Name: " + whichList + " not found!"));
    }
}
