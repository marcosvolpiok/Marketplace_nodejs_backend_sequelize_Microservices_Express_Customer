class messageController{
  constructor(messageRepository) {
    this.messageRepository=messageRepository;
  }

  list = async (req, res) => { 
    try{
      const messages=await this.messageRepository.list();
      res.json(messages);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }

  listByServer = async (req, res) => {  
    try{
      const messages=await this.messageRepository.listByServer(req.params.id);
      res.json(messages);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }

  listByMessage = async (req, res) => {  
    try{
      const messages=await this.messageRepository.listByMessage(req.body.message);
      res.json(messages);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }

  static = async (req, res) => {  
    const messages=await this.messageRepository.static();
    res.json(messages);
  }
}


module.exports = messageController;