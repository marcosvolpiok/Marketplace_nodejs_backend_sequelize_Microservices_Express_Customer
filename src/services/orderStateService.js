class orderStateService {
    constructor(orderStateRepository) {
        this.orderStateRepository=orderStateRepository;
      }
    
      list = async (req, res) => {
          const orderState=await this.orderStateRepository.list();
          
          return orderState;
      }

}

module.exports = orderStateService;