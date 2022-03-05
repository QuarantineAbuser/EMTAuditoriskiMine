package mk.ukim.finki.emt.eshop.repository;

import mk.ukim.finki.emt.eshop.model.Role;
import mk.ukim.finki.emt.eshop.model.User;
import mk.ukim.finki.emt.eshop.model.projections.UserProjection;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testFindAll(){
        List<User> users = userRepository.findAll();
        Assert.assertEquals(2, users.size());
    }

    @Test
    public void testFetchAll(){
        List<User> users = userRepository.fetchAll();
        Assert.assertEquals(2, users.size());
    }

    @Test
    public void testLoadAll(){
        List<User> users = userRepository.loadAll();
        Assert.assertEquals(2, users.size());
    }

    @Test
    public void testProjectUsernameAndNameAndSurname(){
        UserProjection userProjection = userRepository.findByRole(Role.ROLE_USER);
        Assert.assertEquals("user1", userProjection.getUsername());
        Assert.assertEquals("Peter", userProjection.getName());
        Assert.assertEquals("Pan", userProjection.getSurname());
    }
}
