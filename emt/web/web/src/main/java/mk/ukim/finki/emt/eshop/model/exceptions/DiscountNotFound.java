package mk.ukim.finki.emt.eshop.model.exceptions;

public class DiscountNotFound extends RuntimeException{
    public DiscountNotFound(Long id){
        super(String.format("Discount %d was not found!", id));
    }
}
