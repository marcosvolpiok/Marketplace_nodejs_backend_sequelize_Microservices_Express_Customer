class shopController{
  constructor(messageService) {
    this.messageService=messageService;
  }

  list = async (req, res) => { 
    res.json(
        [
            {
                'name': 'jean clasico',
                'id': 1234,
                'images': [
                    'https://netivooregon.s3.amazonaws.com/attach/modelo/20210402/2000/76201894.jpg',
                    'https://netivooregon.s3.amazonaws.com/attach/modelo/20210402/2000/85063480.jpg'
                ]
            },
            {
                'name': 'short de baño',
                'id': 4567,
                'images': [
                    'https://netivooregon.s3.amazonaws.com/attach/modelo/20210326/2000/97947628.jpg'
                ]
            }
        ]
        );
    /*
    try{
      const messages=await this.messageService.list();
      res.json(messages);
    }catch(e){
      res.status(500).json({message: e.message})
    }
    */
  }

  detail = async (req, res) => { 
    res.json(
        {
            'id_shop': 4444,
            'name': 'jean clasico',
            'detail': 'Jean elastizado clásico, corte chino de Denim',
            'id': 1234,
            'images': [
                {id: 1, image: 'https://netivooregon.s3.amazonaws.com/attach/modelo/20210402/2000/76201894.jpg'},
                {id: 2, image: 'https://netivooregon.s3.amazonaws.com/attach/modelo/20210402/2000/85063480.jpg'}
            ]
        }
        );
    /*
    try{
      const messages=await this.messageService.list();
      res.json(messages);
    }catch(e){
      res.status(500).json({message: e.message})
    }
    */
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


module.exports = shopController;