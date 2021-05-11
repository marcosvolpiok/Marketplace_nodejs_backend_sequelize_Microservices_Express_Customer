class orderStateController{
  constructor(orderStateService) {
    this.orderStateService=orderStateService;
  }

  list = async (req, res) => {
    try{
      const orderState=await this.orderStateService.list();
      res.json(orderState);
    }catch(e){
      res.status(500).json({message: e.message})
    }
    
  }
}


module.exports = orderStateController;