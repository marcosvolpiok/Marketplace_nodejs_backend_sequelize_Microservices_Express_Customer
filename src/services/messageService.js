class messageService {
    constructor(messageRepository) {
        this.messageRepository=messageRepository;
      }
    
      list = async (req, res) => {
          const messages=await this.messageRepository.list();
          
          return messages;
      }
    
      listByServer = async (id, res) => { 
          const messages=await this.messageRepository.listByServer(id);

          return messages;
      }
    
      listByMessage = async (message, res) => {
          const messages=await this.messageRepository.listByMessage(message);

          return messages;
      }
    
      static = async (req, res) => {  
        const messages=await this.messageRepository.static();

        return messages;
      }
}

module.exports = messageService;