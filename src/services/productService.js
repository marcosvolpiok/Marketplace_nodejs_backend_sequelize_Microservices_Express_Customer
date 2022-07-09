class productService {
    constructor(productRepository) {
        this.productRepository=productRepository;
      }
    
      list = async (req, res) => {
          const product=await this.productRepository.list(req);
          
          return product;
      }

      listById = async (req, res) => {
        const product=await this.productRepository.listById(req);
        
        return product;
    }

    listByShop = async (req, res) => {
        const product=await this.productRepository.listByShop(req);
        
        return product;
    }
}

module.exports = productService;