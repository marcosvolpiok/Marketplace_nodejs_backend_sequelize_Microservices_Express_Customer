const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class orderRepository extends Interface(baseRepository) {
    constructor(Order, OrderProduct, Shop, Customer, Sequelize, sequelize) {
        super();
        this.Order=Order;
        this.OrderProduct=OrderProduct;
        this.Shop=Shop;
        this.Customer=Customer;
        this.Sequelize=Sequelize;
        this.sequelize=sequelize;
        this.Op = this.Sequelize.Op;
        
    }

    async list () {
        const order = await this.Order.findAll({
            include: [
                { model: this.Shop, as: 'shop' }
            ]
        });

        return order;
    }

    async addFromCart () {
        
    }

    async listByIdCustomer (res)
    {
        console.log(res);
        const order = await this.Order.findAll({
            include: [
                { model: this.Shop, as: 'shop' }
            ],
            where: {
                id_customer: res.userData.idCustomer
            }
        });

        return order;
    }


    
    async listByIdShop (res)
    {
        const order = await this.Order.findAll({
            where: {
                id_shop: res.userData.idShop
            },
            include: [
                { model: this.Customer, as: 'customer' }
            ],
        });

        return order;
    }

    async listById (id, res)
    {
        const order = await this.Order.findOne({
            include: [
                { model: this.Customer, as: 'customer' },
                { model: this.OrderProduct, as: 'orderProduct' }
            ],
            where: {
                [this.Op.or]: [
                  { id_shop: res.userData.idShop },
                  { id_customer: res.userData.idCustomer }
                ],
                id: id
              }
        });

        return order;
    }

    async add (params) {
        const orderNew = await this.Order.create({
            id_shop: params.idShop,
            id_customer: params.res.userData.idCustomer,
            id_cart: params.idCart,
            total_amount: params.totalAmount
        });

        return orderNew;
    }

    update (params) {
    }

    delete (params) {
    }
}

module.exports = orderRepository;