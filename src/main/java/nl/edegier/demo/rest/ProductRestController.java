package nl.edegier.demo.rest;

import nl.edegier.demo.model.Person;
import nl.edegier.demo.service.PersonService;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created by Erwin on 22/05/2017.
 */
@Path("/person")
public class ProductRestController {
    @Inject
    PersonService personService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Person> getProducts(){
        return this.personService.findAll();
    }
}
