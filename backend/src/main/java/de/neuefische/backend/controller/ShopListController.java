package de.neuefische.backend.controller;


import de.neuefische.backend.api.DtoListname;
import de.neuefische.backend.model.ListItem;
import de.neuefische.backend.model.ShopList;
import de.neuefische.backend.service.ShopListService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/lists")
public class ShopListController {

    private final ShopListService shopListService;

    public ShopListController(ShopListService shopListService) {
        this.shopListService = shopListService;
    }

    @GetMapping()
    public ResponseEntity<List<ShopList>> getAllLists(){
        return ok(shopListService.getAll());
    }

    @PostMapping()
    public ResponseEntity<ShopList> postNewList(@RequestBody DtoListname listName){
        Optional<ShopList> optionalShopList = shopListService.saveNewList(listName.getListName());
        if (optionalShopList.isEmpty()){
            return ResponseEntity.badRequest().build();
        }
        return ok(optionalShopList.get());
    }
}
