package de.neuefische.backend.repo;

import de.neuefische.backend.model.ShopList;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ShopListRepo extends MongoRepository <ShopList, String> {
}
