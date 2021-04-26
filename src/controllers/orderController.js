class orderController{
  constructor(orderService) {
    this.orderService=orderService;
  }

  list = async (req, res) => { 
    try{
      const order=await this.orderService.list();
      res.json(order);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }  

  addFromCart = async (req, res) => { 
    try{
      const order=await this.orderService.addFromCart(req);
      res.json(order);
    }catch(e){
      res.status(500).json({message: e.message})
      console.log(e)
    }
  }
  
  listByIdCustomer = async (req, res) => { 
    try{
      const order=await this.orderService.listByIdCustomer(req);
      res.json(order);
    }catch(e){
      res.status(500).json({message: e.message})
      console.log(e)
    }
  }
}


module.exports = orderController;