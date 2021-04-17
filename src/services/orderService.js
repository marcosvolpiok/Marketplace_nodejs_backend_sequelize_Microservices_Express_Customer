class orderService {
    constructor(orderRepository) {
        this.orderRepository=orderRepository;
      }
      
      list = async (req, res) => {
          const order=await this.orderRepository.list();
          
          return order;
      }

      addFromCart = async (req, res) => {
        
    }
}

module.exports = orderService;