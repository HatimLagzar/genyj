import variantService from '../../services/products/VariantService';

class CreateProduct {
  init() {
    variantService.init()
  }
}

export default new CreateProduct();