class orderProductController{
  constructor(orderProductService) {
    this.orderProductService=orderProductService;
  }

  list = async (req, res) => { 
    try{
      const orderProduct=await this.orderProductService.list();
      res.json(orderProduct);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }  

  listById = async (req, res) => { 
    try{
      const orderProduct=await this.orderProductService.listById(req);
      res.json(orderProduct);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }

}


module.exports = orderProductController;