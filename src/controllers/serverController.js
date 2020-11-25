class serverController{
    constructor(serverRepository) {
        this.serverRepository=serverRepository;
    }

    list = async (req, res) => {
        try{
            const servers=await this.serverRepository.list();
            res.json(servers);
        }catch(e){
            res.status(500).json({message: e.message})
        }
    }

    add = async (req, res) => {
        try{
            const server=await this.serverRepository.add(req.body);
            res.json(server);
        }catch(e){
            res.status(500).json({message: e.message})
        }
    }
}

module.exports = serverController;