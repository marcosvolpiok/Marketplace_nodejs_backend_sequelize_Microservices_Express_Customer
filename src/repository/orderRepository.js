const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class orderRepository extends Interface(baseRepository) {
    constructor(Order, OrderProduct, Shop, Customer, OrderState, Sequelize, sequelize) {
        super();
        this.Order=Order;
        this.OrderProduct=OrderProduct;
        this.Shop=Shop;
        this.Customer=Customer;
        this.OrderState=OrderState;
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
                { model: this.Shop, as: 'shop' },
                { model: this.OrderState, as: 'orderState' },
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
                { model: this.Customer, as: 'customer' },
                { model: this.OrderState, as: 'orderState' },
            ],
        });

        return order;
    }

    async listById (id, res)
    {
        const order = await this.Order.findOne({
            include: [
                { model: this.Customer, as: 'customer' },
                { model: this.OrderProduct, as: 'orderProduct' },
                { model: this.OrderState, as: 'orderState' },
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
            total_amount: params.totalAmount,
            id_state: 1
        });

        return orderNew;
    }

    async update (params) {
        let orderUpdate;

        const order = await this.Order.findOne({
            where: {
                [this.Op.or]: [
                  { id_shop: params.res.userData.idShop },
                  { id_customer: params.res.userData.idCustomer }
                ],
                id: params.id
              }
        });
        if(order){
            order.id_state = params.id_state;
            orderUpdate = order.save();
        }else{
            orderUpdate = {state: 'ORDER_DOESNT_FOUND', detail: 'Pedido no encontrado'};
        }
        return orderUpdate;
    }

    delete (params) {
    }
}

module.exports = orderRepository;