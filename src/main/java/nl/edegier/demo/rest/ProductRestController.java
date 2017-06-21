package nl.edegier.demo.rest;

import nl.edegier.demo.model.Person;
import nl.edegier.demo.model.Product;
import nl.edegier.demo.service.PersonService;
import nl.edegier.demo.service.ProductService;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.math.BigDecimal;
import java.util.List;

/**
 * Created by Erwin on 22/05/2017.
 */
@Path("/product")
public class ProductRestController {
    @Inject
    ProductService productService;

    @GET
    @Path("all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProducts(){
        // saddTestData();
        return Response.ok(this.productService.findAll()).build();
    }

    @GET
    @Path("generate")
    public void addTestData() {
        Product product = new Product();
        product.setDescription("Hallo");
        product.setName("Iedereen");
        product.setPrice(BigDecimal.valueOf(45));

        productService.persist(product);

         product = new Product();
        product.setDescription("TEST 1");
        product.setName("Name 1");
        product.setPrice(BigDecimal.valueOf(10));

        productService.persist(product);

         product = new Product();
        product.setDescription("Test 2");
        product.setName("name 2");
        product.setPrice(BigDecimal.valueOf(1));

        productService.persist(product);

         product = new Product();
        product.setDescription("Test 3");
        product.setName("anme 3");
        product.setPrice(BigDecimal.valueOf(66));

        productService.persist(product);
    }
}