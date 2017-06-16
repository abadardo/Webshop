package nl.edegier.demo.service;

import nl.edegier.demo.model.Product;

import javax.ejb.Stateless;

/**
 * Created by abadardo on 15-6-2017.
 */
@Stateless
public class ProductService extends AbstractCrudRepository<Product> {
    @Override
    protected Class<Product> getEntityClass() {
        return Product.class;
    }
}
