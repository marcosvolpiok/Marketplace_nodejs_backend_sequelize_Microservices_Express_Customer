class ServerService {
  constructor(serverRepository) {
    this.serverRepository=serverRepository;
  }

  list = async () => {
    const servers=await this.serverRepository.list();
    return servers;
  }

  add = async (req) => {
    const server=await this.serverRepository.add(req);
    return server;
  }
}

module.exports = ServerService;