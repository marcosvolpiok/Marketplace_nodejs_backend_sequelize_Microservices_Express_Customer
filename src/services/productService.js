class productService {
    constructor(productRepository) {
        this.productRepository=productRepository;
      }
    
      list = async (req, res) => {
          const product=await this.productRepository.list();
          
          return product;
      }
}

module.exports = productService;