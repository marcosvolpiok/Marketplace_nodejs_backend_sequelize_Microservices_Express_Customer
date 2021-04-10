class cartService {
    constructor(cartRepository) {
        this.cartRepository=cartRepository;
      }
      
      list = async (req, res) => {
          const cart=await this.cartRepository.list();
          
          return cart;
      }

      listByIdUser = async (req, res) => {
          const cart=await this.cartRepository.listByIdUser(req.params.idCustomer);
          
          return cart;
      }

      listByIdUserAndIdShop = async (req, res) => {
        const cart=await this.cartRepository.listByIdUserAndIdShop(req.params.idCustomer, req.params.idShop);
        
        return cart;
    }  
}

module.exports = cartService;