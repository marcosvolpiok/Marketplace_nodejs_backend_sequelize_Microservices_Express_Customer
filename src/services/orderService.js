class orderService {
    constructor(orderRepository, orderProductRepository, cartRepository, cartProductRepository) {
        this.orderRepository=orderRepository;
        this.orderProductRepository=orderProductRepository;
        this.cartRepository=cartRepository;
        this.cartProductRepository=cartProductRepository;
        
      }
      
    list = async (req, res) => {
        const order=await this.orderRepository.list();
          
        return order;
    }

    addFromCart = async (req, res) => {
        
    }

    addFromCart = async (req, res) => {
        const cart = await this.cartRepository.listById(req.body.idCart);
        if(cart){
            const orderNew = await this.orderRepository.add({
                idShop: cart.id_shop,
                idCustomer: cart.id_customer,
                idCart: req.body.idCart
            });

            const cartProduct = await this.cartProductRepository.listById(req.body.idCart);
            if(cartProduct){
                cartProduct.forEach(async prod => {
                    await this.orderProductRepository.add({
                        idOrder: orderNew.id,
                        idProduct: prod.id_product,
                        quantity: prod.quantity
                    });
                });
            }

            return {state: 'OK', detail: 'Tu pedido fue creado exitosamente'}
        } else {
            return {state: 'ERROR_CART_NOT_FOUND', detail: 'Tu pedido fue creado exitosamente'}
        }
    }
}

module.exports = orderService;