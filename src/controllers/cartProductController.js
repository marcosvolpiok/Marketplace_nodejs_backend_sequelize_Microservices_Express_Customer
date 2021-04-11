class cartProductController{
  constructor(cartProductService) {
    this.cartProductService=cartProductService;
  }


  listById = async (req, res) => { 
    try{
      const cart=await this.cartProductService.listById(req);
      res.json(cart);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }
   
  add = async (req, res) => { 
    try{
      const cart=await this.cartProductService.add(req);
      res.json(cart);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }

  update = async (req, res) => { 
    
  }

  delete = async (req, res) => { 
    try{
      const cart=await this.cartProductService.delete(req);
      res.json(cart);
    }catch(e){
      res.status(500).json({message: e.message})
    }    
  }
}


module.exports = cartProductController;