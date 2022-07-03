class shopService {
    constructor(shopRepository) {
        this.shopRepository=shopRepository;
      }
    
      list = async (req, res) => {
          const shop=await this.shopRepository.list2(req);
          
          return shop;
      }
}

module.exports = shopService;