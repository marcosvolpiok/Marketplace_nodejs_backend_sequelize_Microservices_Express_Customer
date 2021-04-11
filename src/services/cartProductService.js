class cartProductService {
    constructor(cartProductRepository) {
        this.cartProductRepository=cartProductRepository;
      }
      
      listById = async (req, res) => {
          const cart=await this.cartProductRepository.listById(req.params.idCart);
          
          return cart;
      }

      add = async (req, res) => {
        const cart=await this.cartProductRepository.add({idCustomer: req.body.idCustomer, idShop: req.body.idShop, idProduct: req.body.idProduct, quantity: req.body.quantity});
        
        return cart;
    }

    delete = async (req, res) => {
        const cart=await this.cartProductRepository.delete({idCustomer: req.body.idCustomer, idCart: req.body.idCart, idProduct: req.body.idProduct});
        
        return cart;
    }

    update = async (req, res) => {
        const cart=await this.cartProductRepository.update({id: req.body.id, quantity: req.body.quantity});
        
        return cart;
    }
}

module.exports = cartProductService;