package de.neuefische.backend.repo;

import de.neuefische.backend.model.ShopList;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ShopListRepo extends MongoRepository <ShopList, String> {


}
