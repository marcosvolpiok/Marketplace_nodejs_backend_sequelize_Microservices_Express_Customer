class cartProductService {
    constructor(cartProductRepository) {
        this.cartProductRepository=cartProductRepository;
      }
      
      listById = async (req, res) => {
          const cart=await this.cartProductRepository.listById(req.params.idCart);
          
          return cart;
      }

}

module.exports = cartProductService;