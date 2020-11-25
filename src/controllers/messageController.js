class messageController{
  constructor(messageService) {
    this.messageService=messageService;
  }

  list = async (req, res) => { 
    try{
      const messages=await this.messageService.list();
      res.json(messages);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }

  listByServer = async (req, res) => {  
    try{
      const messages=await this.messageService.listByServer(req.params.id);
      res.json(messages);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }

  listByMessage = async (req, res) => {  
    try{
      const messages=await this.messageService.listByMessage(req.body.message);
      res.json(messages);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }

  static = async (req, res) => {  
    const messages=await this.messageService.static();
    res.json(messages);
  }
}


module.exports = messageController;