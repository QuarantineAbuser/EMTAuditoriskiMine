package mk.ukim.finki.emt.eshop.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
public class Discount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime dateCreated;

    private LocalDateTime validUntil;

    @OneToMany(mappedBy = "discount", fetch = FetchType.EAGER)
    private List<User> user;

    public Discount() {
    }
}