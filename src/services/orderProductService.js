class orderProductService {
    constructor(orderProductRepository) {
        this.orderProductRepository=orderProductRepository;
      }
      
      list = async (req, res) => {
          const orderProduct=await this.orderProductRepository.list();
          
          return orderProduct;
      }

      listById = async (req, res) => {
        const orderProduct=await this.orderProductRepository.listById(req.params.id);
        
        return orderProduct;
    }

}

module.exports = orderProductService;