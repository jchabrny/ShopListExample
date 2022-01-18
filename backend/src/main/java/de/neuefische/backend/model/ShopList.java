package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.HashMap;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ShopList {

    @Id
    String id;

    String listName;
    HashMap<String,ListItem> listItems;

}
