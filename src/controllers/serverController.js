class serverController{
    constructor(serverService) {
        this.serverService=serverService;
    }

    list = async (req, res) => {
        try{
            const servers=await this.serverService.list();
            res.json(servers);
        }catch(e){
            res.status(500).json({message: e.message})
        }
    }

    add = async (req, res) => {
        try{
            const server=await this.serverService.add(req.body);
            res.json(server);
        }catch(e){
            res.status(500).json({message: e.message})
        }
    }
}

module.exports = serverController;