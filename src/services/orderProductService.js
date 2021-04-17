class orderProductService {
    constructor(orderProductRepository) {
        this.orderProductRepository=orderProductRepository;
      }
      
      list = async (req, res) => {
          const orderProduct=await this.orderProductRepository.list();
          
          return orderProduct;
      }

}

module.exports = orderProductService;